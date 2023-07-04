import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import CartContainer from "./components/cartContainer";
import { useSelector,useDispatch, useSelector } from "react-redux/es/hooks/useSelector";
import { calculateTotaals ,getCartITems} from "./feature/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/modal";

function App() {
  const{cartItems,isLoading}=useSelector((store)=>store.cart)
  const{isOpen}=useSelector((store)=>store.modal)
  const dispatcj=useDispatch();
  useEffect(()=>{
    dispatcj(calculateTotaals());
  },[cartItems])
  useEffect(()=>{
     dispatcj(getCartITems())
  },[])
  if(isLoading){
    return <div className="loading">
      loading..
    </div>
  }
  return <main>
    {isOpen &&<Modal/>}
    
     <Navbar/>
     <CartContainer/>
  </main>;
}
export default App;
