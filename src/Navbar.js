import React from 'react';
import styled from "styled-components";

const Nav=styled.div`
height:70px;
background:linear-gradient(170deg,#1bc059,#0d47a1);
display:flex;
justify-content:space-between;
align-items:center;
position:relative;
`;
const Title=styled.div `
font-size:30px:
color:#fff;
font-weight:600;
font-family:'Times New Roman, Times, serif;
text-transform:uppercase;
margin-left:20px;
`;
const CartImg=styled.img`
height:48px;
margin-right:20px;
`;
const CartIconContainer=styled.div`
position:relative;
cursor:pointer;
`;
const CartCount = styled.div`
background-color:${(props)=>props.color};
border-radius:50%;
padding:4px 8px;
position:absolute;
right:10px;
top:-5px;
font-size:12px;
visibility:${(props)=>props.show?"visible":"hidden"};
`;

class Navbar extends React.Component{
    render(){
        const {cartCount} = this.props;
        return(
            
            <>
            <Nav>
                <Title>Movie-App</Title>

                <CartIconContainer>
                    <CartImg alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" style={styled.cartCount}/>
                    <CartCount color = "yellow" show={false}>{cartCount}</CartCount>
                </CartIconContainer>
            </Nav>
            </>
        )
    }
}
export default Navbar;