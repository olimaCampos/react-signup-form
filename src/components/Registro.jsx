import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Card } from "react-bootstrap";
import { Formulario } from "./Formulario";
import { SocialButton } from "./SocialButton";
import { Alerta } from "./Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export const Registro = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleValidationResult = (isValid) => {
    setShowAlert({
      show: true,
      isSuccess: isValid,
    });
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h2">Crea una cuenta</Card.Header>
              <Card.Body>
                <Card.Text>
                  <SocialButton
                    facebook={faFacebook}
                    github={faGithub}
                    linkedin={faLinkedinIn}
                  />
                </Card.Text>
                <Card.Title>O usa tu email para registrarte</Card.Title>
                <Card.Text>
                  <Formulario handleValidationResult={handleValidationResult} />
                </Card.Text>
              </Card.Body>
              <Card.Text>
                <Alerta show={showAlert.show} isSuccess={showAlert.isSuccess} />
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
