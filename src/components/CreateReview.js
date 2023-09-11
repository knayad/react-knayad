import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Form } from "react-bootstrap";

import { useState } from "react";

const CreateReview = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [pending, setPending] = useState(false);
  const [validated, setValidated] = useState(false);

  function refreshPage() {
    window.location.reload(false);
  }

  const handleCheck = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleSubmit = (event) => {
    const review = { title, author, body };

    setPending(true);

    fetch("http://localhost:8000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then(() => {
        console.log("review added");
        setPending(false);
      })
      .then(refreshPage);

    console.log(review);
    // console.log(event.target.value);
  };

  return (
    <Container className="create-review">
      <br />
      <br />
      <Row>
        <br />
        <h2> Create a review! </h2>
        <br />
        <Form noValidate validated={validated} onSubmit={handleCheck}>
          <Form.Label>
            <h3>Title:</h3>
          </Form.Label>
          <Form.Control
            required
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Required."
          />
          <Form.Control.Feedback type="invalid">
            Required.
          </Form.Control.Feedback>
          <Form.Label>
            <h3>Author:</h3>
          </Form.Label>
          <Form.Control
            required
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Required. Your name will not be displayed, but please let me know who you are!"
          />
          <Form.Control.Feedback type="invalid">
            Required.
          </Form.Control.Feedback>
          <Form.Group className="mb-3" controlId="body">
            <Form.Label>
              <h3>Review:</h3>
            </Form.Label>
            <Form.Control
              required
              type="text"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              as="textarea"
              rows={3}
              placeholder="Required."
            />
            <Form.Control.Feedback type="invalid">
              Required.
            </Form.Control.Feedback>
          </Form.Group>
          {!pending && (
            <Button
              variant="outline-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
          {pending && (
            <Button disabled variant="outline-secondary" type="submit">
              Adding review...
            </Button>
          )}
          <br />
          <br />
        </Form>
        <small>
          <b>*Inappropriate comments will be removed.</b>
        </small>
        <br />
        <br />
      </Row>
    </Container>
  );
};

export default CreateReview;
