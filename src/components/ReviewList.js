import { Container, Row } from "react-bootstrap";

const ReviewList = (props) => {
  const reviews = props.reviews;

  return (
    <Container className="review-list">
      {reviews.map((review) => (
        <Container className="view-review" key={review.id}>
          <Row>
            <h2>{review.title}</h2>
          </Row>
          <Row>
            <p>{review.body}</p>
          </Row>
        </Container>
      ))}
    </Container>
  );
};

export default ReviewList;
