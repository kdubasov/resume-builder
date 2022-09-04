import React from 'react';
import './ButtonNext.css';
import {Link} from "react-router-dom";

const ButtonNext = ({text,url,absolute,animate}) => {
    return (
    <Link
        to={url}
        className={`ButtonNext ${absolute?'posAbs':''} ${animate}`}
    >
      <span>{text}</span>
    </Link>
    );
};

export default ButtonNext;