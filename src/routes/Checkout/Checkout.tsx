
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct.component";
import Subtotal from '../../components/Subtotal/Subtotal.component';
import { useStateValue } from "../../StateProvide";

import "./Checkout.styles.scss";

const Checkout = () => {
  const {state, dispatch } = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {state.basket.map((el) => (
            <CheckoutProduct
              id={el.id}
              title={el.title}
              rating={el.rating}
              price={el.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
