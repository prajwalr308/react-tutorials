import React from 'react'
import {useState} from 'react';
import './Navbar.css'
import { Button } from 'react-bootstrap';

function Navbar() {
   const [text, settext] = useState("priya");



    function textChange(){
            settext("prajwal")
    }

    return (
        <div className="color">
           <Button variant="primary" onClick={textChange}>{text}</Button>{' '}
        </div>
    )
}

export default Navbar



