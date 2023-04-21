import React,{useContext} from 'react'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faCartShooping} from '@fortawesome/free-solid-svg-icons'
import styles from "./CartComponent.module.css"
import { CartContext } from '../../context/CartContext'

export const CartComponent = () => {
    const {itemCount} = useContext(CartContext);

    return (
        <div className={styles.Container}>
            
            <span className={styles.itemCount}>{itemCount.qtyItems}</span>

        </div>
    )
}


