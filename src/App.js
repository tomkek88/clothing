import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import { Route } from "react-router-dom";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
