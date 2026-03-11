import "./Prod.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

function Prod() {
  return (
    <>
      <section className="text-center bg-secondary p-5 m-3">
        <h1 id="titre">Liste des produit</h1>
        <div id="prod">
          <div>Souris</div>
          <div>Prix : 25€</div>
          <Button>Commander</Button>
          <Button variant="success">Primary</Button>
          <Button variant="danger">danger</Button>
          <Button variant="dark">dark</Button>
          <button className="btn btn-outline-success">click</button>
        </div>
      </section>

      <Card>
        <Card.Body>
          <Card.Title>Titre</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
            suscipit.
          </Card.Text>
        </Card.Body>
      </Card>

      <Table striped hover>
        <thead>
          <tr className="table table-dark">
            <th>Prénom</th>
            <th>Nom</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Toto</td>
            <td>Tata</td>
          </tr>
          <tr>
            <td>Jean</td>
            <td>Pierre</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Prod;
