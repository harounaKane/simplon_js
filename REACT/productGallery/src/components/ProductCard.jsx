import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Card>
      <Link to={`/detail/${product.id}`}>
        <Card.Img src={product.image} alt={product.name} />
      </Link>
      <Card.Body className="text-center">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-primary">{product.price}€</Card.Text>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
