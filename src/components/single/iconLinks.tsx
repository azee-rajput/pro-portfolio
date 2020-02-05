import React from 'react';
import {SocialLinkedinCircular} from 'styled-icons/typicons/SocialLinkedinCircular';
import {Github} from 'styled-icons/boxicons-logos/Github';
import '../../styles/iconlinks.scss';


const IconLinks: React.FC<object>=()=>{
    return(
        <div  className="iconLinks">
            <a href="https://www.linkedin.com/in/abdul-zahir-rajput-585898152/" target="_blank" rel="noopener noreferrer"><SocialLinkedinCircular size="40" color="#0e76a8"/></a>
            <a href="https://github.com/azee-rajput" target="_blank" rel="noopener noreferrer"><Github size="40" color="grey"/></a>
        </div>
    )
}

export default IconLinks;