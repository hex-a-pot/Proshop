import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Button} from 'react-bootstrap'
import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Rating from '../components/Rating';
import { listProductDetails } from '../actions/productActions';

const ProductScreen = ({match}) => {

    const dispatch = useDispatch();
    const productDetails = useSelector(state=>state.productDetails)
    const {loading,error,product} = productDetails;
 
useEffect(()=>{

    dispatch(listProductDetails(match.params.id))

},[match,dispatch])


    return ( 
        <>
        <Link className = 'btn btn-light my-3' to ='/'>Go Back</Link>
        <Row>

            <Col md= {6}>
                <Image src = {product.image} alt ={product.name} fluid />
            </Col>
            <Col md= {3}>
                <ListGroup variant = 'flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value = {product.rating} text = {`${product.numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price:${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description:{product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <ListGroup variant = 'flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Price:
                            </Col>
                            <Col>
                            <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Status:
                            </Col>
                            <Col>
                            <strong>{product.countInStock>0?'In stock':'Out of stock'}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className = "btn-block" type = "button" disabled = {product.countInStock===0}>Add to Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>

        </Row>
        </>
     );
}
 
export default ProductScreen;