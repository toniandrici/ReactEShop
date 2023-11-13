import "./Product.styles.scss";
import React from 'react';
import { useStateValue } from "../../StateProvide";
type ProductProps = {
  title: string;
  price: number;
  image: string;
  id: string;
  rating: number;
};
const star = "\u{2B50}";
const Product = ({ title, price, image, id, rating }: ProductProps) => {
  const {state, dispatch} = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill("")
            .map(() => (
              <p>{star}</p>
            ))}{" "}
        </div>
      </div>
      <img src={image} alt="product" className="product__img" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
