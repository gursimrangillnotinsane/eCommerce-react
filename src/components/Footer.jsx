import { Shop } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
    const { cartt } = useContext(Shop)
    console.log(cartt)
    const navigate = useNavigate()

    const goToCart = () => {
        navigate("/Cart", { state: { cartt: cartt } });
    }

    return <>
        <div className="heading">
            <h1>Shop Shop</h1>
        </div>


        <div className="footer">
            <button onClick={goToCart} >{cartt.length}</button>
        </div>
    </>
}

export default Footer;