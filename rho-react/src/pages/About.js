import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <Container>
      <br />
      <h1 className="about"> About Me</h1>
      <br />
      <h1 className="welcome"> My name is Nadia</h1>
      <p>
        {" "}
        Gawd... I hate talking about myself. Basically, you need to know two
        things:
        <ol>
          <li> I'm like a cat on it's fifth life</li>
          <li>
            {" "}
            I'm a nerd so, I worked in different industries to keep learning.
          </li>
        </ol>
        <br /> That's why I fell into software development.{" "}
      </p>
      <p>
        After learning full stack web development through MIT, I have been
        focusing on front-end design. I also have been dabbling in data science.
        <br />
        I think I'm on life three or four. What do you think?
        <br />
        These days I prefer a quieter energy. I like rock climbing, gardening,
        and coding. Basically, after years in front of people, I like to do
        things where I can interact "at will" rather than as the driving source
        of my bread and butter.
      </p>
      ;
      <br />
    </Container>
  );
};

export default About;
