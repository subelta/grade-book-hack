import os

BASE_DIR = os.path.dirname(os.path.dirname(__file__))

ENV = os.environ.get("ENV")

if ENV == "prod":
    from app.config.prod import *
else:
    from app.config.dev import *
