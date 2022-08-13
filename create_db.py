from app.db import engine
import app.db.models as models


if __name__ == '__main__':
    """
    DROP SCHEMA public CASCADE;
    CREATE SCHEMA public;
    """
    models.Base.metadata.create_all(bind=engine)
