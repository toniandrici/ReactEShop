
import Product from "../../components/Product/Product.component";
import "./Home.styles.scss"

const HomeComponent = () => {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />
                    <div className="home__row">
                        <Product
                            title="Titlu random e pe aici"
                            price={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                            id="1"
                            rating={3}
                        />
                        <Product
                            title="Titlu random e pe aici 2"
                            price={52}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                            id="12"
                            rating={4}
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            title="Titlu random e pe aici 3 "
                            price={55}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                            id="14"
                            rating={5}
                        />
                        <Product
                            title="Titlu random e pe aici 4"
                            price={56}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                            id="16"
                            rating={4}
                        />
                        <Product
                            title="Titlu random e pe aici"
                            price={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                            id="13"
                            rating={4}
                        />
                        </div>
                        <div className="home__row">
                        
                        </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent;