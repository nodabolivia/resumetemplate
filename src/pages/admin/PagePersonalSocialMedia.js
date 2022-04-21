import React from 'react';
import { Button, Table } from 'react-bootstrap';
export const PagePersonalSocialMedia = () => {

    return (
        <>
            <h2>
                Links
            </h2>
        <Button>New</Button>  
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>social media</th>
                    <th colSpan="2"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>My facebook</td>
                    <td colSpan="2">
                        <Button variant="danger"  className="m-1" >Delete</Button>
                        <Button>Edit</Button>
                    </td>                    
                </tr>
                <tr>
                    <td>My facebook</td>
                    <td colSpan="2">
                        <Button variant="danger"  className="m-1" >Delete</Button>
                        <Button>Edit</Button>
                    </td>                    
                </tr>
                <tr>
                    <td>My facebook</td>
                    <td colSpan="2">
                        <Button variant="danger"  className="m-1" >Delete</Button>
                        <Button>Edit</Button>
                    </td>                    
                </tr>
            </tbody>
        </Table>

        </>
    )
}