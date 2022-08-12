import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <div>ADIPAN</div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Numéro</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Date</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Mois</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
