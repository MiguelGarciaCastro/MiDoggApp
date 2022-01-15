import Home from "../components/Home";
import Cities from "../components/Cities";
import Cart from "../components/Cart";

export default function homepage() {
    return (
        <div className="container">
           <Home />
        </div>
        <div className="container">
           <Cities /> 
        </div>
    )
}
