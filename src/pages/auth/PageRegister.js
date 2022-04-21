import React from 'react';
import { Button, Form } from 'react-bootstrap';
export const PageRegister = () => {
    
    
    const [user, setUser] = useState({
        email:'',
        password:'',
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    
    
    return(
        <>
            <h1>Register</h1>
            <Form>
                {email}
                {password}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="youremail@comany.ltd" 
                    onChange={(e)=>{setEmail(e.target.value);}}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" name="email" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" 
                    onChange={(e)=>{setPassword(e.target.value);}}
                    />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </>
    );
}