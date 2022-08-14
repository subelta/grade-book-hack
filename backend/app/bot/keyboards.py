from telebot import types
from emoji import emojize

# MESSAGES
INFO_TEXT = f"Всем привет! {emojize(':robot_face:', language='alias')} \n\n" \
            "Добро пожаловать на хакатон!!!\n"

LIKE_BUTTON = f"{emojize(':thumbs_up:', language='alias')}"
DISLIKE_BUTTON = f"{emojize(':thumbs_down:', language='alias')}"


# KEYBOARDS
def default_keyboard():
    """Default keyboard."""
    keyboard = types.ReplyKeyboardMarkup(row_width=2, resize_keyboard=True)
    like_btn = types.KeyboardButton(LIKE_BUTTON)
    dislike_btn = types.KeyboardButton(DISLIKE_BUTTON)
    keyboard.row(like_btn, dislike_btn)
    return keyboard
