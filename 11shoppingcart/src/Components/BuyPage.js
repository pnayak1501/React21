import React, {useState, useEffect} from "react"
import Axios from "axios"
import CartItem from "./CartItem"

import {random, commerce} from "faker"
import {Container, Col, Row} from "reactstrap"

const apiKey = "INSERT_YOUR_KEY"

const url = "https://myjson.dit.upm.es/api/bins/1nu2"

const BuyPage = ({addInCart}) => {

    const [product, setProduct] = useState([])

    const fetchPhotos = async() => {
        const {data} = await Axios.get(url);  
    const {photos} = data;

    const allProduct = photos.map(photo => (
            {
                smallImage : photo.src.medium,
                tinyImage : photo.src.tiny,
                productName : random.word(),
                productPrice : commerce.price(),
                id : random.uuid()
            }
        ));

        setProduct(allProduct);
    };

    useEffect(() => {
        fetchPhotos()
    }, [])

    return(
        <Container fluid>
            <h1 className="text-success text-center">
                Buy Page
            </h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CartItem product={product} addInCart={addInCart} />
                    </Col>
                ))}
            </Row>
        </Container>
    )   
}

export default BuyPage;