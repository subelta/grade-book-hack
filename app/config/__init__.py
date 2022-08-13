import os

env = os.environ.get('ENV')
if env == 'production':
    from app.config.prod import *
else:
    from app.config.dev import *
