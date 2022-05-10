import React, { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import sweetalert2 from "sweetalert2";
import { Modal, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
// import 'dotenv/config'

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const ResultPage = ({ firstName, lastName, id }) => {
  const router = useRouter();
  const [editFirstName, setEditFirstName] = useState(firstName);
  const [editLastName, setEditLastName] = useState(lastName);
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
    setEditAge(age);
    setEditFirstName(firstName);
    setEditLastName(lastName);
  };
  const openModal = () => setModal(true);

  const deleteData = () => {
    sweetalert2
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          console.log(id);
          axios
            .delete(`${SERVER_URL}/testData/del`, {
              headers: {
                id: id,
              },
            })
            .then((result) => {
              sweetalert2.fire("delete", "", "success");
              router.reload(window.location.pathname);
            })
            .catch((err) => {
              console.log(err);
              sweetalert2.fire("can not delete", "", "info");
            });
        }
      });
  };

  //   const saveBtn = () => {
  //     axios.put(`${SERVER_URL}/member/edit`, {
  //       id: id,
  //       firstName: editFirstName,
  //       lastName: editLastName,
  //       age: editAge
  //     }).then(result => {
  //       router.reload(window.location.pathname)
  //     })
  //   };

  return (
    <div>
      {/* <p>
        FirstName :{firstName} <br></br>LastName : {lastName}{" "}
        <Button variant="primary" type="submit">
          edit
        </Button>
        <Button variant="danger" type="submit" onClick={deleteData}>
          delete
        </Button>
      </p> */}

      <Card style={{ margin: "20px" }}>
        <Card.Header>ID : {id}</Card.Header>
        <Card.Body style={{ textAlign: 'center'}}>
          <Card.Title>{firstName} {lastName}</Card.Title>
          {/* <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text> */}
          <Button variant="primary" type="submit" style={{ marginRight: '10px'}}>
            edit
          </Button>
          <Button variant="danger" type="submit" onClick={deleteData}>
            delete
          </Button>
        </Card.Body>
      </Card>
      {/* <p>
        ID: {id} | First name: {firstName} | Last name: {lastName} | Age: {age}|{" "}
        <button onClick={openModal}>edit</button> <button onClick={delBtn} >delete</button>
      </p> */}

      {/* <Modal id="loginModal" show={modal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>แก้ไข</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>
            First name:{" "}
            <input
              type="text"
              value={editFirstName}
              onChange={(text) => setEditFirstName(text.target.value)}
            />
          </p>
          <p>
            Last name:{" "}
            <input
              type="text"
              value={editLastName}
              onChange={(text) => setEditLastName(text.target.value)}
            />
          </p>
          <p>
            Age:{" "}
            <input type="text" value={editAge} onChange={(text) => setEditAge(text.target.value)} />
          </p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={saveBtn}>
            save
          </Button>
          <Button id="close" variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default ResultPage;
