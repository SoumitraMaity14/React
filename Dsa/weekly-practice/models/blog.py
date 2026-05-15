

from models.database import Base

class User(Base):
    __table_name="users"

    id:Column(String)

    