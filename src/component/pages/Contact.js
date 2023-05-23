import React from "react";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import curriculum from "./NorbertoManzanosnew.pdf"
import "./styleContact.css"

const Contact=()=>{


    return(
      
        <div id="home" class="first_page">
          <h3 id="contact">Contacto</h3>
          <div class="wrapper">
            <div class="content-splitter">
              <div class="nav">
                
              </div>
              <div class="left">
                <div class="block">
                  <div class="header">Hola, soy Norberto</div>
                  <div className="contactP">
                    <p>Espero que te haya gustado mi portfolio. Aqui encontraras mis datos de contacto y tambien mi curriculum para descargar.</p>
                   
                  </div>
                  <div className="contactPinfo">
                    <div className="contactPinfoItem" >
                        <EmailIcon/>
                        <p onClick={() => window.location = 'mailto:norbertomanzanos@gmail.com'}  className="contactDownload" >norbertomanzanos@gmail.com </p>
                   </div>
                    <div className="contactPinfoItem">
                        <SmartphoneIcon/>
                    
                        <p>  54-9-11-33232167</p>
                    </div>
                    <div className="contactPinfoItem">
                        <LinkedInIcon/>
                        <p onClick={()=>window.open("https://www.linkedin.com/in/norberto-manzanos-desarrollador-fullstack/")} className="linkCard"> https://www.linkedin.com/in/norberto-manzanos-desarrollador-fullstack/</p>
                    </div>
                    <div className="contactPinfoItem">
                        <ArticleIcon/>
                        <p onClick={()=>window.open(curriculum)} className="contactDownload"> Curriculum</p>
                    </div>
                  </div>
                </div>
               
               
              
              </div>
            </div>
            <div class="right">
                <img src="norberto.png" alt="" className="contactImg"/>
              </div>
        
          </div>
        </div>
   
        
      
    )
}

export default Contact
/*"https://images.unsplash.com/photo-1580707578919-892eb22db615?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"*/
/*  <div class="c2a">Contactame!</div>
                <div class="c2a">Curriculum!</div>*/