import React, {useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useDispatch } from 'react-redux'
import { addToList } from "../features/cart/cartList";
import { useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";

let history = createBrowserHistory();

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;

`
const ImageContainer = styled.div`
    flex: 1;

`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px; 
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px ;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`


const Product = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const item = location.state;
    const [counter, setCounter] = useState(0);

    const dispatching = () => {
        if(counter > 0){
            dispatch(addToList(Object.assign(item, {"quantity": counter})))
        }
    }
    
    return(
        <Container>
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src={item.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.name}</Title>
                    <Desc>{item.description}</Desc>
                    <Price>${item.price}</Price>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveOutlinedIcon onClick={() => setCounter((counter > 0) ? counter - 1 : 0)}/>
                            <Amount>{counter}</Amount>
                            <AddOutlinedIcon onClick={() => setCounter(counter + 1)}/>
                        </AmountContainer>
                        <Button onClick={() => {dispatching()}}>ADD TO CART</Button>
                        <Button onClick={() => history.back()}>BACK</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}
export default Product