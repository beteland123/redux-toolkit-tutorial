import { useDispatch } from "react-redux";
import { clearCart } from "../feature/cart/cartSlice";
import { closeModal } from "../feature/cart/modal/modalslice";

const Modal =()=>{
    const dispatch=useDispatch();
    return(
        <aside className="modal-continer">
            <div className="modal">
                <h4>romve all items from shoing cart?</h4>
                <div className="bttm-continer">
                    <button oncClick={()=>{
                        dispatch(clearCart());
                        dispatch(closeModal())
                    }
                        }>
                        confirm
                    </button>
                    <button
                     onClick={() => {
                        dispatch(closeModal());
                      }}>
                        cancel
                    </button>
                    
                </div>
            </div>
        </aside>
    )
}
export default Modal;