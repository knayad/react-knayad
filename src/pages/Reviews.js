import useFetch from "../hooks/useFetch";

import Star from "../assets/images/svg/bright-yellowstar-svgrepo-com.svg";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import ReviewList from "../components/ReviewList";
import CreateReview from "../components/CreateReview";

const Reviews = () => {
  const {
    data: reviews,
    error,
    pending,
  } = useFetch("http://localhost:8000/reviews");
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
          {pending && (
            <Container>
              <br />
              <h2> Loading... </h2>
              <br />
            </Container>
          )}
          {error && (
            <Container>
              <br />
              <h2> {error} </h2>
              <br />
            </Container>
          )}
          <Col md={8}>{reviews && <ReviewList reviews={reviews} />}</Col>
        </Container>
      </Container>
      <br />
      <br />
      <CreateReview />
    </>
  );
};

export default Reviews;
