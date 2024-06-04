import { useState } from "react";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";



function Cart() {
    const { state } = useLocation();


    const [cartt, setCart] = useState(state && state.cartt)

    const navigate = useNavigate()

    const deletCart = (index) => {

        const newCart = cartt.filter(item => item.id !== index);
        setCart(newCart);
    }
    const goToCart = () => {
        navigate("/", { state: { cartt: cartt } });
    }
    return <>
        <h2>My Cart</h2>
        <div>
            {cartt && cartt.map((product) => {

                return <div key={product.id}>
                    <p>
                        <button style={{ marginRight: "20px" }} onClick={() => { deletCart(product.id) }} ><BsFillTrash3Fill /></button>
                        {product.title}
                        {product.quantity}
                    </p>
                </div>
            })

            }
            <button onClick={goToCart} >Go back</button>
        </div>
    </>
}

export default Cart;