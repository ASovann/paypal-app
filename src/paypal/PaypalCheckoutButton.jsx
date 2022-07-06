import React, { useEffect, useRef } from "react";

import { useDispatch } from 'react-redux'
import {emptyList} from "../features/cart/cartList";

function PaypalCheckoutButton(props){
    const price = props.price
    console.log(props)
    const paypal = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units:[
                        {
                            description: "Command my store",
                            amount:{
                                currency_code: "EUR",
                                value: price
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log("Successful order: ", order)
                dispatch(emptyList())
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])

    return(
        <div>
            <div ref={paypal}></div>
        </div>
    )
}
    
export default PaypalCheckoutButton