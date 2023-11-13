import "./CheckoutProduct.styles.scss";

import { useStateValue } from "../../StateProvide";

type ProductType = {
  title: string;
  rating: number;
  price: number;
  id: number;
}

const CheckoutProduct = ({id, title, rating, price}: ProductType) => {
const {state, dispatch} = useStateValue();
const removeFromBasket = (id: number) => {
  dispatch({
    type:"REMOVE_FROM_BASKET",
    item:  { id }
  })
};

  return (
    <div className="checkoutProduct" key={id}>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" className="checkoutProduct__image" alt="" />
      <div className="checkoutProduct__info">
        <h4 className="checkoutProduct__title">{title}</h4>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill("")
            .map(() => (
              <p>{"\u{2B50}"}</p>
            ))}
        </div>

        <button onClick={() => removeFromBasket(id)}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;

