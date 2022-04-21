import React from 'react';
export const FormSocialMedia = () => {
    return (
        <div>
            <h1>
                Social Med
            </h1>
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Link
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control type="text"
                            placeholder="Write your career name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Link
                    </Form.Label>
                    <Col sm="9">
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}