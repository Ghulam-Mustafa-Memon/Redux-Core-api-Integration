import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "./Store/Actions/GetProduct";

function Products() {

  useEffect(() => {
    dispatch(GetProduct());
  }, []);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.Reducer.data);
  console.log(data);

  return (
    <>
      <div className="Products-container mt-5">
        <div className="card m-4 bg-dark text-light" style={{ width: "18rem" }}>
          <img
            src="./images/pexels-tima-miroshnichenko-7567443.jpg"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-light w-100 p-0">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
