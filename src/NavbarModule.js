import React,{Component} from "react";
import styles from './Navbar.module.css';



class Navbar extends Component{
    render(){
        return(
            <>
            <div className={styles.nav}>
                <div className={styles.title}>Movie App</div>
            
                    <div className={styles.CartIconContainer}>
                        <img
                        className={styles.cartIcon}
                         alt="cart-icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" style={styles.cartIcon}
                        />
                        
                        <span className={styles.CartCount}>3</span>
                    </div>
            </div>
            
            </>
        )
    }
}
export default Navbar;


