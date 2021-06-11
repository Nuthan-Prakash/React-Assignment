import Navbar from 'react-bootstrap/Navbar'
import React, {Component} from 'react'; 
import '../Footer/Footer.css'

export const Footer=()=>{
    return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="footer" >     
                <p class="mx-auto">copyrights @2021. All rights reserved.</p>  
            </Navbar>
        
    );
}