import telebot
from emoji import emojize
from sqlalchemy.orm import scoped_session, sessionmaker

from app.config import BOT_TOKEN
from app.db import crud, engine
from app.bot.keyboards import (
    INFO_TEXT, default_keyboard,
    LIKE_BUTTON, DISLIKE_BUTTON
)


bot = telebot.TeleBot(BOT_TOKEN)
session_factory = sessionmaker(bind=engine)
Session = scoped_session(session_factory)
session = Session()


@bot.message_handler(commands=["start"])
def start(message):
    chat_id = message.chat.id
    username = message.from_user.username
    first_name = message.from_user.first_name
    last_name = message.from_user.last_name
    is_bot = message.from_user.is_bot
    language_code = message.from_user.language_code

    crud.TgUser.add_user(session, chat_id, username, first_name, last_name, is_bot, language_code)

    keyboard = default_keyboard()
    text = INFO_TEXT
    bot.send_message(chat_id, text, reply_markup=keyboard)


@bot.message_handler(func=lambda message: True)
def text(message):
    keyboard = default_keyboard()
    if message.text == LIKE_BUTTON:
        grade = 1
        comment = None
    elif message.text == DISLIKE_BUTTON:
        grade = -1
        comment = None
    else:
        grade = None
        comment = message.text
    crud.TgUser.add_poll(session, message.chat.id, grade, comment)
    name = message.from_user.first_name or message.from_user.username
    text = "Спасибо {} {}".format(name, emojize(":smiling_face:", language='alias'))
    bot.send_message(message.chat.id, text, reply_markup=keyboard)


if __name__ == "__main__":
    bot.infinity_polling()
