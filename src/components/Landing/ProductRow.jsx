import React from 'react';

const ProductRow = ({ image, title, description, bottle, price }) => {
  return (
    <>
      <div className="row mb-3 text-center justify-content-center align-items-center sblue mt-3">
        <div className="col-5">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-12 col-sm-5 col-md-5 col-lg-5">
              <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-12 col-sm-5 col-md-5 col-lg-5 me-5">
              <h5>{title}</h5>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-7 mt-3 mt-sm-2">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6">
              <h5 style={{ fontSize: 'smaller', marginRight: '80px' }}>{description}</h5>
            </div>
            <div className="col-12 col-sm-2 text-sm-start">
              <h5>{bottle}</h5>
            </div>
            <div className="col-12 col-sm-2">
              <h5 style={{ marginLeft: '20px' }}>${price}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRow;