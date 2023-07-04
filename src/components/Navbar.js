import {CartIcon} from '../icons'
import {useSelector} from 'reacr-redux'
const Navbar =() =>{
    const {amount} =useSelector((store)=>store.cart,amount)
    return(
        <nav>
            <div className='nav-bar'>
                <h3>redux toolkit</h3>
                <div className='nav-container'>
                    <CartIcon/>
                    <div className='amount-container'>
                        <p className='total-amount'>0</p>
                    </div>

                </div>
            </div>
        </nav>
    )
}
export default Navbar