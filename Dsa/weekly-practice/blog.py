from sqlalchemy.orm import DeclartiveState

class Base(DeclartiveState):
    pass

class Blog(Base):
    __table_name__="blogs"
    title:Column(String, primary_key=True)
    description:Column(String, Nullable=False)
    image:Column(String, Nullable=True)
    createdAt:DateTime(datetime)
    updatedAt:DateTime(datetime)