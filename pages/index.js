import InfoBox from "../components/InfoBox";
import Button from "../components/Button";
import Container from "../components/Container";
import Link from "../components/Link";

export default function HomePage() {
  return (
    <>
      <Container>
        <Button>Styled</Button>
        <Button color="danger">Styled (danger)</Button>
      </Container>

      <Container>
        <p>
          This is a <Link href="/">styled link</Link>.
        </p>
      </Container>

      <Container direction="column">
        <InfoBox title="This is an info message" message="Read it carefully!" />
        <InfoBox
          title="Success"
          message="You have done it!"
          variant="success"
        />
        <InfoBox
          title="Error"
          message="Something went wrong!"
          variant="error"
        />
      </Container>
    </>
  );
}
