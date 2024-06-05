import { Container } from "react-bootstrap";

import Planes from "../components/Planes";

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Cuentanos ¿En que te podemos ayudar?</h1>
      <Planes />
    </Container>
  );
};

