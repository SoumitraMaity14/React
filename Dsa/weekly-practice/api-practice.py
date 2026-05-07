from fastapi import fastAPI, Depends

from sqlalchemy.orm import Session



def get_db():
    db=session()
    try:
        yield db
    finally:
        db.close()

@app.post("/product")

def create_product(product:Product, db:Session=Depends(get_db)):
    db.add(database_model.Product(**product.model_dump))
    db.commit()
    return product

@app.get("/product")

def get_product(db:Session=Depends(get_db)):
    db_product=db.query(database_model.Product).all
    return db_product

@app.put("/product")

def update_product(id:int, product:Product, db=Session=Depends(get_db)):
    db_product=db.query(database_model.Product).filter(database_model.Product.id==id).first()
    if db_product:
        db_product.name=product.name
        db_product.description=product.description
        db_product.price=product.price
        db_product.quantity=product.price
        db.commit()
        return "product updated"
    else:
        return "product not updated"
    
