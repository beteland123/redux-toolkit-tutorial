import CartItem from "./cartITem"
import { clearCart } from "../feature/cart/cartSlice"
import { openModal } from "../feature/cart/modal/modalslice"
import { useDispatch, useSelector } from "react-redux/es/hooks/useSelector"
const CartContainer =()=>{
    const dispatch=useDispatch()
    const {cartItem,total,amount}=useSelector((store)=>store.cart)
   if(amount<1){
    return <section className="cart">
        <header>
            <h2>your bag</h2>
            <h4 className="empty-cart">is currently empty</h4>
        </header>
    </section>
   }
    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItem.map((item)=>{
                 return <CartItem key={item.id} {...item}/>
                })}
            </div>
            <footer>
                <hr></hr>
                <div className="cart-total">
                    <h4> 
                        total <span> ${total.tofixed()}
                    </span>
                    </h4>
                </div>
                <button className="btn clear-btn" onClick={()=>dispatch(openModal())}>
                    Clear cart
                </button>
            </footer>
        </section>
    )
        
    
}
export default CartContainer 