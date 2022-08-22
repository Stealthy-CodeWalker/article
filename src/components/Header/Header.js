import React from "react";
import './Header.css';
import image from '../../img/1613624944.jpg'

export default function Header(){
    return(
        <div>
            <p id="t1">
                    Relations: Why are they important?
            </p>
            <img src={image} id="i11"/>
        </div>
    );
}