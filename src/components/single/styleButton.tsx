import React from 'react';
import {Link} from 'react-router-dom';
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
            <button className="styleButton">
                {(props.type==="anchor" ? 
                <a href={props.to} className="butn" target={props.tgt?"_blank":"_self"}>{props.label}</a> : <Link className="butn" to={props.to}>{props.label}</Link>)}
            </button>
        </div>
    )
}

export default StyleButton;