import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Formulario = ({handleValidationResult}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleValidation = () => {
    if (!name || !email || !password || !password2) {
      handleValidationResult(false);
      return false;
    }
    handleValidationResult(true);
    return true;
  };
  const handleSubmit = e => {
    e.preventDefault();
    handleValidation()
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Control
            type="name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            type="email"
            placeholder="tumail@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirma tu contraseña"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Registrarse</Button>
      </Form>
    </>
  );
};