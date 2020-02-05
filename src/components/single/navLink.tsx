import * as React from 'react';
import '../../styles/navbar.scss';

interface IPROPS{
    link: string;
    name: string;
}

export const NavLink : React.FC<IPROPS> = (props) =>{
   return <li><a href={props.link}>{props.name}</a></li>
}