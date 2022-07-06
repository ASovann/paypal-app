import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useSelector, useDispatch } from 'react-redux'
import { removeFromList } from "../features/cart/cartList";
import { createBrowserHistory } from "history";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

import PaypalCheckoutButton from "../paypal/PaypalCheckoutButton"




let history = createBrowserHistory();


const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`
const Bottom = styled.div`
    displey: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const RemoveProductContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
`
const ProductQuantity = styled.div`
    margin: 5px;
    font-size: 24px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Hr= styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    heigh: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`
const PaypalButtonContainer = styled.div`
`


const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cartList.list)
    const [carts, setCarts] = useState(cart)

    let price = 0
    for(let i = 0; i < cart.length; i++){
        price += (parseInt(carts[i].price) * carts[i].quantity)
    }
    console.log(carts)
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton onClick={() => history.back()}>CONTINUE SHOPPING</TopButton>
                    <TopButton type="filled">PAYPAL</TopButton>
                </Top>
                <Bottom>
                    {carts.map((item, index) => 
                        <div key={index}>
                            <Info>
                                <Product>
                                    <ProductDetails>
                                        <Image src={item.img}/>
                                        <Details>
                                            <ProductName><b>Product: </b>{item.name}</ProductName>
                                            <ProductId><b>ID: </b>{item.id}</ProductId>
                                        </Details>
                                    </ProductDetails>
                                    <PriceDetails>
                                        <RemoveProductContainer>
                                            <RemoveOutlinedIcon/>
                                            <ProductQuantity>{item.quantity}</ProductQuantity>
                                            <AddOutlinedIcon  />
                                            <DeleteOutlineOutlinedIcon onClick={() => dispatch(removeFromList(item))}/>
                                            
                                        </RemoveProductContainer>
                                        <ProductPrice>${item.price}</ProductPrice>
                                    </PriceDetails>
                                </Product>
                            </Info>
                            <Hr />
                        </div>
                    )}
                    
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>${price}</SummaryItemPrice>
                        </SummaryItem>
                        {price > 0 ? (
                            <PaypalCheckoutButton price={price}/>
                        ) : (
                            <Button onClick={() => {
                                alert("Nothing in your cart")
                            }}>
                                Checkout
                            </Button>
                        )}
                    </Summary>
                </Bottom>
            </Wrapper>

        </Container>
    )
}
export default Cart