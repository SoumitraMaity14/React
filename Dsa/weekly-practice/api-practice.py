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
