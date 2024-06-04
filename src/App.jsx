import { useState, createContext, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'





export const Shop = createContext({
  cartt: []
});
export const cartt = []
function App() {
  const [products, setProducts] = useState(null)
  const [cartt, setCart] = useState([])
  const { state } = useLocation();


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))

    if (state != null) {
      setCart(state.cartt)

    }
    else {
      setCart([])
    }


  }, [])


  const cart = (id) => {
    var productToAdds = products.find(product => product.id === id);

    setCart((cartt) => [...cartt, productToAdds])

  }




  return <>

    {products ? <>
      <Shop.Provider value={{ cartt }}>
        <Footer />
      </Shop.Provider>

      <div className="conatiner">
        {products.map((product) => {
          return <div key={product.id}>
            <h2>{product.title}</h2>
            <div className="innnerDiv">
              <p className="innerP">{product.description}</p>
              <img src={product.image}></img>
            </div>
            <button onClick={() => cart(product.id)}>Add to cart</button>
          </div>

        })}
      </div>
    </>
      : (
        <p>Loading...</p>
      )}

  </>

}


export default App
