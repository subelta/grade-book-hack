import os
from urllib.parse import quote_plus

# Database
DB_HOST = os.environ.get("DB_HOST")
DB_PORT = 5432
DB_NAME = os.environ.get("DB_NAME")
DB_USER = os.environ.get("DB_USER")
DB_PSSWD = os.environ.get("DB_PSSWD")
SQLALCHEMY_DATABASE_URL = "postgresql://{}:{}@{}:{}/{}".format(DB_USER, quote_plus(DB_PSSWD), DB_HOST, DB_PORT, DB_NAME)

# Tg Bot
BOT_TOKEN = os.environ.get("BOT_TOKEN")
