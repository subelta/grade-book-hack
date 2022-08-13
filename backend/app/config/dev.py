import os
from urllib.parse import quote_plus

# Database
DB_HOST = "54.202.68.213"
DB_PORT = 5432
DB_NAME = "exodus"
DB_USER = "exodus"
DB_PSSWD = "31415926"
SQLALCHEMY_DATABASE_URL = "postgresql://{}:{}@{}:{}/{}".format(DB_USER, quote_plus(DB_PSSWD), DB_HOST, DB_PORT, DB_NAME)