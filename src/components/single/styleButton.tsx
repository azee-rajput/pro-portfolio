import React from 'react';
import '../../styles/stylebutton.scss';

interface IPROPS{
    label: string;
    type:string;
    to: string;
    tgt?: boolean;
}

const StyleButton: React.FC<IPROPS>=(props)=>{
    return(
        <div>
            <a href={props.to} className="butn" target={props.tgt?"_blank":"_self"}>
                <button className="styleButton">{props.label}</button>
            </a>
        </div>
    )
}

export default StyleButton;