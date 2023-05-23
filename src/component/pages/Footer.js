import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./styleFooter.css"

const Footer=()=>{

    return (
        <div className="footer">

        <div className="footerIcons">
            <div className="footerIconsItem">
                <LinkedInIcon onClick={()=>window.open("https://www.linkedin.com/in/norberto-manzanos-desarrollador-fullstack/")} fontSize="large"/>
            </div>
            <div className="footerIconsItem">
                <EmailIcon onClick={()=>window.location = 'mailto:norbertomanzanos@gmail.com'} fontSize="large"/>
            </div>
            <div className="footerIconsItem">
                <GitHubIcon onClick={()=>window.open("https://github.com/Nam3216")} fontSize="large"/>
            </div>
        </div>

        </div>
    )
}

export default Footer