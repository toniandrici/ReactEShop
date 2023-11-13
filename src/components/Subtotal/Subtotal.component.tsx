
import "./Subtotal.styles.scss";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvide";
import { getTotal } from "../../reducer";


const Subtotal = ()  => {
    const { state } = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.basket.length} items): <strong>${ getTotal(state) }</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType="text"
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
