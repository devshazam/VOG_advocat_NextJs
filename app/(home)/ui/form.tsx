"use client";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


export default function FormComponent() {


  const [validated, setValidated] = useState(false);

  const handleSubmit = (event:any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  return (
    <>

<Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Ваше Имя:</Form.Label>
          <Form.Control type="text" placeholder="Иван" required />
          <Form.Control.Feedback type="invalid">
            Введите пожалуйста имя.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" placeholder="example@example.ru" required />
          <Form.Control.Feedback type="invalid">
            Введите пожалуйста email.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Label>Текст обращения:</Form.Label>
          <Form.Control as="textarea" aria-label="With textarea" name='text'  required  />
          <Form.Control.Feedback type="invalid">
          Введите пожалуйста текст.
          </Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Я согласен с политикой конфиденциальности."
          feedback="Пожалуйста подтвердите свое согласие."
          feedbackType="invalid"
        />
      </Form.Group>
      <div className="d-grid gap-2">

      <Button type="submit" size='lg'>Отправить</Button>
      </div>
    </Form>


    </>
  );
}
