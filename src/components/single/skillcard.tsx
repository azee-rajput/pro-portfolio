import * as React from 'react';
import { Card } from 'react-bootstrap';
import { StyledIconProps } from 'styled-icons/types';

interface IPROPS{
    icon: React.ReactElement<StyledIconProps>;
    title: string;
}

const SkillCard : React.FC<IPROPS> = (props) =>{
   return (
       <Card className="skillcard">
           <Card.Body>
               <div>{props.icon}</div>
               <Card.Title style={{marginTop:"50px"}} ><b>{props.title}</b></Card.Title>
           </Card.Body>
       </Card>
   )
}

export default SkillCard;