import HeaderComponent from "./components/Header/Header.component";
import HomeComponent from "./routes/Home/Home.component";
import Checkout from "./routes/Checkout/Checkout";
import Login from "./routes/Login/Login.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvide";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StateProvider reducer={reducer} initialState={initialState} >
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element = {<Login />} />
          </Routes>
        </BrowserRouter>
      </StateProvider>
    </div>
  );
}

export default App;
