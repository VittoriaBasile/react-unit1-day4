import { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
class BookList extends Component {
  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="form">
            <Form.Control type="text" placeholder="Cerca" />
          </Form.Group>
        </Form>
        <Row xs="2" md="3" lg="4" xl="5">
          {this.props.books.map((book) => (
            <Col className="py-2" key={book.asin}>
              <SingleBook
                img={book.img}
                title={book.title}
                category={book.category}
                price={book.price}
                asin={book.asin}
              />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;
