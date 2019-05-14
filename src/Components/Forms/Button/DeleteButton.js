import React from 'react';
import './DeleteButton.css';
const DeleteButton=(props)=>{
    return(
        <svg onClick={props.onClick} width={props.width} height={props.height} className={props.className} viewBox="0 0 94 94" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>Group</title>
    <desc>Created with Sketch.</desc>
    <g id="Page-1" stroke="none" strokeWidth="1" fill={props.fill} fillRule="evenodd">
        <g id="Group" transform="translate(2.000000, 2.000000)" stroke="#979797" strokeWidth="3">
            <circle id="Oval" cx="45" cy="45" r="45"></circle>
            <path d="M21.5,23.5 L66.5,65.5" id="Line-2" strokeLinecap="square"></path>
            <path d="M21.5,65.5 L66.5,23.5" id="Line" strokeLinecap="square"></path>
        </g>
    </g>
</svg>
    );
}

export default DeleteButton;