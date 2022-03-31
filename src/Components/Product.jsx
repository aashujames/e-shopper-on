import { AddShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 250px;
    height: 360px;
    background: white;
    margin: auto;
    position: relative;
    overflow: hidden;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0;
    transform: scale(0.95);
    transition: box-shadow 0.5s, transform 0.5s;
    &:hover{
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0,0,0,0.2);
    }
`

const Container = styled.div`
    width:100%;
    height:100%;
`

const Top = styled.div`
    height: 80%;
    width:100%;
    background: url(${props => props.src}) 
    no-repeat center center;
    -webkit-background-size: 100%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
`

const Bottom = styled.div`
    width: 200%;
    height: 20%;
    transition: transform 0.5s;
    &.clicked{
        transform: translateX(-50%);
    }
`

const Left = styled.div`
    height:100%;
    width: 50%;
    background: #f4f4f4;
    position:relative;
    float:left;
`
const Info = styled.div`
    padding: 20px;
    float: left;
    width: calc(70% - 40px);
`

const Name = styled.h1 `
    margin:0;
    padding:0;
    font-size: 20px;
`

const Price = styled.p`
    margin:0;
    padding:0;
`

const Product = ({item}) => {
  return (
    <Wrapper>
        <Container>
            <Top src={item.img} />
            <Bottom>
                <Left>
                    <Info>
                        <Name >{item.name}</Name>
                        <Price >{item.price}</Price>
                    </Info>
                </Left>
            </Bottom>
            
                
            
        </Container>
    </Wrapper>
  )
}

export default Product