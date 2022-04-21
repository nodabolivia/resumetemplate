import React from 'react';
import {AiFillGoogleCircle} from 'react-icons/ai';
import imagenes from '../../utils/imagenes';

export const PagePreviewProfile = ()=>{


    return (
        <div>
            <div>
            <img src={imagenes[0].img} width='180em' alt={imagenes[0].alt} />
            </div>
            <div>
                <h1>
                    [Name]
                </h1>
                <h2>
                    [carreer/ocuppation]
                </h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla.     
                </p>
            </div>
            <div>
                <a href="www.google.com" >
                    <AiFillGoogleCircle/> [Google account]
                {/* <img src={imagenes[0].img} width='20em' alt={imagenes[0].alt} className='logo logo-menu' /> */}
                </a>
                
            </div>
        </div>
    )
}