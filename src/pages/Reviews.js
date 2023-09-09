import { useEffect, useState } from "react";
import Star from "../assets/images/svg/bright-yellowstar-svgrepo-com.svg";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import ReviewList from "../components/ReviewList";

const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/reviews")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, []);

  return (
    <>
      <Container>
        <h1>Reviews</h1>
        <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
        <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
        <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
        <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
        <img src={Star} alt="star" style={{ height: 55, width: 55 }} />
        <br />
        <br />
        <Container className="reviews">
          <Col md={8}>{reviews && <ReviewList reviews={reviews} />}</Col>
        </Container>
      </Container>
      <br />
      <br />
      <Container>
        <Row>
          <br />
          <h2> Create a review! </h2>
          <InputGroup className="mb-3">
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">Title</InputGroup.Text>
              <Form.Control
                aria-label="Title"
                aria-describedby="inputGroup-sizing-sm"
              />
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Author (required, but will not display in post)"
              >
                <Form.Control type="text" placeholder="Author" />
              </FloatingLabel>
            </InputGroup>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Write your review here..."
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a review here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <br />
            <Button variant="outline-secondary" id="button-addon2">
              Submit
            </Button>
          </InputGroup>
          <p>Inappropriate comments will be removed.</p>
        </Row>
      </Container>
    </>
  );
};

export default Reviews;
