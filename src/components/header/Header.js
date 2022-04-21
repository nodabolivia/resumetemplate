import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FORM_DATA_INFORMATION, HOME, PERSONAL_SOCIAL_MEDIA, PREVIEW } from '../../navigation/CONSTANTS';
import imagenes from '../../utils/imagenes';
export const Header = () => {
    const { user } = useAuth();
    const signOut = () => {

    }
    const postProfile = () => {

    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">

            <Navbar.Brand >
                <Link to={HOME} className='navbar-brand'>
                    <img src={imagenes[0].img} width='20em' alt={imagenes[0].alt} className='logo logo-menu' />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {(user) ? (
                    <>
                        <Link to={PREVIEW} className='nav-link'> Preview</Link>

                        <Link to={FORM_DATA_INFORMATION} className='nav-link'> Edit data</Link>
                        <Link to={PERSONAL_SOCIAL_MEDIA} className='nav-link'> Social media</Link>
                        <Nav.Item className="ml-auto" >
                            <Nav.Link id="close-navlink" onClick={() => { postProfile() }}>Post profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="ml-auto" >
                            <Nav.Link id="close-navlink" onClick={() => { signOut() }}>Sign out</Nav.Link>
                        </Nav.Item>


                    </>
                ) : (<></>)}
            </Navbar.Collapse>

        </Navbar>
    );
}
