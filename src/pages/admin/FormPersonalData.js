import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
export const FormPersonalData = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [birthday, setBirthday] = useState('');
    const [file, setFile] = useState('');
    const [profileImgURL, setProfileImgURL] = useState('');



    return (
        <>
            <h1>Informacion personal</h1>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control
                            value={name} onChange={(e) => { setName(e.target.value) }}
                            placeholder="Write you name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Last Name
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="text"
                            placeholder="Write your last name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Career
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="text"
                            placeholder="Write your career name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Pick your photo profile
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="file"
                            onChange={(e) => {
                                setFile(URL.createObjectURL(e.target.files[0]));
                            }}
                        />
                    </Col>
                    <Col sm="2">
                        <img src={file} width='50em' />
                    </Col>
                </Form.Group>
                <Button type="submit"  > Save</Button>
            </Form>






        </>


    );
}