import React, {useState, useEffect} from "react";
import axios from "axios";
import { Router, useRouter } from 'next/router'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

const FormPage = ({set}) => {
  const router = useRouter()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const submitForm = (firstName, lastName) => {
      axios.post(`${SERVER_URL}/testData/add`, {
          firstName,
          lastName,
      }).then(res => {
        router.reload(window.location.pathname)
      //   axios.get(`http://localhost:3013/member/all`).then(res => {
      //     // set([])  
      // })
      }).catch(err => {
          console.log(err)
          alert('err')
      })
  }

  return (
  <>

    <Form>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" placeholder="Enter FirstName" onChange={(text) => setFirstName(text.target.value)} />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>LastName</Form.Label>
          <Form.Control type="test" placeholder="Enter LastName" onChange={text => setLastName(text.target.value)}/>
        </Form.Group>
        <div style={{ textAlign: 'center'}}>
           <Button variant="primary" type="submit"  onClick={() => submitForm(firstName, lastName)}>
          Submit
        </Button>
        </div>
       
      </Form>
  </>
  );
};

export default FormPage;
