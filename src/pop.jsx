import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { TbWriting } from "react-icons/tb";

function Pop(showPop) {

    const updateData = () => {

        console.log(showPop.temp.id, "----------");
        // Edit Call ---------
        fetch(`https://67d7ed1a9d5e3a10152c9b40.mockapi.io/UserDB/User/${showPop.temp.id}`, {
            method: 'PUT', // or PATCH
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(showPop.temp)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // Do something with updated task
            showPop.setRef(!showPop.ref);
            alert("Data Changed Successfully");
        }).catch(error => {
            // handle error
        })

        showPop.popclose();
    }

    // Create call ---------------
    const createdata=()=>{
        fetch('https://67d7ed1a9d5e3a10152c9b40.mockapi.io/UserDB/User', {
          method: 'POST',
          headers: {'content-type':'application/json'},
          // Send your data in the request body as JSON
          body: JSON.stringify(showPop.temp)
        }).then(res => {
          if (res.ok) {
              return res.json();
          }
          // handle error
        }).then(task => {
          // do something with the new task
          showPop.setRef(!showPop.ref);
        }).catch(error => {
          // handle error
        })
        showPop.popclose();
  }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

            <Modal show={showPop.popshow} onHide={showPop.popclose}>
                <Modal.Header closeButton>
                    <Modal.Title> {showPop.temp.id ? <h2>Edit Form 🫰🏻</h2> : <h2>Create ➕</h2>}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        {/* Name */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                autoFocus
                                defaultValue={showPop.temp.Name}
                                onChange={(e) => showPop.settemp({ ...showPop.temp, Name: e.target.value })}
                            />
                        </Form.Group>

                        {/* Email */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                defaultValue={showPop.temp.Email}
                                onChange={(e) => showPop.settemp({ ...showPop.temp, Email: e.target.value })}
                            />
                        </Form.Group>

                        {/* Phone */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="+91 934-xxxx-804"
                                autoFocus
                                defaultValue={showPop.temp.PhoneNO}
                                onChange={(e) => showPop.settemp({ ...showPop.temp, PhoneNO: e.target.value })}
                            />
                        </Form.Group>


                        {/* Address */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Chennai"
                                autoFocus
                                defaultValue={showPop.temp.Address}
                                onChange={(e) => showPop.settemp({ ...showPop.temp, Address: e.target.value })}
                            />
                        </Form.Group>

                        {/* Qualification */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> Qualification</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Your Qualification"
                                autoFocus
                                defaultValue={showPop.temp.Qualification}
                                onChange={(e) => showPop.settemp({ ...showPop.temp, Qualification: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={showPop.popclose}>
                        Close
                    </Button>

                    {showPop.temp.id ? <Button variant="primary" onClick={updateData}>
                        Update
                    </Button> : <Button variant="success" onClick={createdata}>
                        Create
                    </Button>}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Pop;