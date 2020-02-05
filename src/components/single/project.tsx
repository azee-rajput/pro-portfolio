import React from 'react';
import '../../styles/project.scss';
import StyleButton from './styleButton';


interface IPROPS{
    name: string;
    github: string;
    demo:string;
    info: string;
    srcImg: string;
}


const Project: React.FC<IPROPS>=(props)=>{
    return(
        <div className="project">
            <img src={props.srcImg} alt={props.name}/>
            <div className="overlay">
                <div className="nameInfo">
                    <h4>Title: {props.name}</h4>
                    <h5>info: {props.info}</h5>
                </div>
                <div className="demoCode">
                    <StyleButton label="Demo" type="anchor" to="#" />
                    <StyleButton label="Code" type="anchor" to="#" />
                </div>
            </div>
        </div>
    )

}

export default Project;