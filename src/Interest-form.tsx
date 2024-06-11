import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import { useRef } from 'react';
//
//

function InterestForm() {
  // const form = useForm()
  // const { register, control, handlesSubmit} =form;
  const url = "https://fund-family-backend-production.up.railway.app/?format=openapi"
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   family_size: 0,
  //   goal: 0,
  //   breakdown: "",
  //   egypt_fam: false, 
  //   link: URL, 
  //   comments: ""
  // })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(formData)
  } 
 

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register Your Interest</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder='Enter name'
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="url"
                name="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Number of family members</Form.Label>
              <Form.Control
               type="number"
               name="family_size"
               placeholder='example: 3'
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Goal amount</Form.Label>
              <Form.Control
               type="number"
               name="goal"
               placeholder='example: $5000'
              />
            </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>General expense breakdown of these funds</Form.Label>
              <Form.Control
              type="text"
              placeholder='Estimated distribution of funds here'
              name= "expenses"
              />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Do you have family in Egypt?</Form.Label>
              <Form.Control
               type="boolean"
               name="Egypt_Family"
              />
             </Form.Group>
             </Col>
             </Row>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>GoFundMe or GiverButters Link (if you have) </Form.Label>
              <Form.Control
               type="url"
               name= "url"
               placeholder='must be functioning url'
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Questions, comments or additional information</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* {!!formState.status && <div className="py-2">Current form status is: {formState.status}</div>} */}
          <Button variant="primary" onSubmit={onSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InterestForm;