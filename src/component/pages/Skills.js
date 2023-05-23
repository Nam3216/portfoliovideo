import React,{useState} from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import CodeIcon from '@mui/icons-material/Code';
import PeopleIcon from '@mui/icons-material/People';
import Scroll from "./Scroll";
import "./styleSkills.css"
import SkillBar  from 'react-skillbars';

const Skills=()=>{
    const[over,setOver]=useState(false)

    const skills = [
        { type: 'Javascript', level: 85 },
        { type: 'Typescript', level: 80 },
        { type: 'React', level: 85 },
        { type: 'Vue', level: 80 },
        { type: 'Node Js', level: 75 },
        { type: 'MySql', level: 75 },
        { type: 'MongoDB', level: 75 },
        { type: 'Ingles', level: 85 }
      ];
      const colors = {
        bar: "#00000",
        title: {
          text: "#fff",
          background: "#2980b9"
        }
      };

      const handleMouseOver=()=>{
        if(over){
            setOver(false) 
        }else{
            setOver(true)
        }
       
      }

    return(
        <div id="containerSkills">
            <div className="skillsTitleP">
                <h3 id="skills">Habilidades</h3>
               
            </div>
           
            <Grid container spacing={2} className="boxSkillsContainer">
           
                <Grid item xs={12} md={4}>
                
                    <div className="boxSkills" onMouseOver={handleMouseOver} onMouseLeave={handleMouseOver}>
                    
                        <p className="boxSkillsTitle">Desarrollo</p>
                        <p>Manejo de multiples tecnologias y altamente adaptable a cambios. Ingles avanzado</p>
                        <CodeIcon style={{height:160,width:"60%"}}id={ over &&"iconOne"} />
                        
                    </div>
                  
                 </Grid>
                
                <Grid item xs={12} md={4}>
                    <div  className="boxSkills" onMouseOver={handleMouseOver} onMouseLeave={handleMouseOver}>
                        <p className="boxSkillsTitle">Habilidades Blandas</p>
                        <p>Mas de 15 años de experiencia en empresas de alto nivel. Trabajo en equipo.</p>
                        <PeopleIcon style={{height:160,width:"60%"}}id={ over &&"iconOne"} />
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div  className="boxSkills" onMouseOver={handleMouseOver} onMouseLeave={handleMouseOver}>
                        <p className="boxSkillsTitle">Aprendizaje</p>
                        <p>Predispuesto al aprendizaje de nuevas tecnologias y nuevos metodos de trabajo.</p>
                        <CastForEducationIcon style={{height:160,width:"60%"}} id={ over &&"iconOne"}/>
                    </div>
                </Grid>

            </Grid>
            <div className="technical">
       <Scroll/>
                <h3> Tecnologias</h3>
               
            {/*    <div className="technicalSkillsContainer">
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={6} className="technicalSkills">
                            
                            <p className="skillsTitles">Front End </p>
                        </Grid>
                        <Grid item xs={12} md={6} className="technicalSkills">
                            <div className="skillsTech">
                            <Grid container spacing={2} >
                                <Grid item xs={4}  md={4} lg={2}  >
                                    <div className="titles">
                                    <img src="html5.png"/>
                                    <p>Html</p>
                                    </div>
                                    </Grid>
                                <Grid item xs={4}  md={4} lg={2} >
                                <div className="titles">
                                    <img src="css3.png"/>
                                    <p>Css</p>
                                    </div>
                                    </Grid>
                                <Grid item xs={4}  md={4} lg={2} >
                                <div className="titles">
                                    <img src="js.png"/>
                                    <p>JavaScript</p>
                                    </div>
                                    </Grid>
                                <Grid item xs={4}  md={4} lg={2} >
                                <div className="titles">
                                    <img src="ts.png"/>
                                    <p>TypeScript</p>
                                    </div>
                                    </Grid>
                                <Grid item xs={4}  md={4} lg={2} >
                                <div className="titles">
                                    <img src="react.png"/>
                                    <p>React</p>
                                    </div>
                                    </Grid>
                                    <Grid item xs={4}  md={4} lg={2}  >
                                    <div className="titles">
                                    <img src="mui.png"/>
                                    <p>Material</p>
                                    </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
               
                </div>
                <div className="technicalSkillsContainer">
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={6} className="technicalSkills">
                           <p className="skillsTitles">Back End  </p>
                        </Grid>
                        <Grid item xs={12} md={6} className="technicalSkills">
                            <div className="skillsTech">
                                <Grid container spacing={2} >
                                    <Grid item xs={4}  md={4} lg={2}  >
                                        <div className="titles">
                                            <img src="nodejsok.png"/>
                                            <p>Node Js</p>
                                        </div>
                                    </Grid>  
                                    <Grid item xs={4}  md={4} lg={2}  >
                                        <div className="titles">
                                            <img src="express.png"/>
                                            <p>Express</p>
                                        </div>
                                    </Grid>   
                                    <Grid item xs={4}  md={4} lg={2}  >
                                        <div className="titles">
                                            <img src="mysql.png"/>
                                            <p>MySql</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={8}  md={8} lg={2}  >
                                     
                                        <div className="titles">
                                            <img src="mongodb.png" id="mongodb"/>
                                            <p>Mongo DB</p>
                                        </div>
                                        
                                    </Grid>
                                   
                                </Grid>
                                
                            </div>
                        </Grid>
                    </Grid>
                    
    </div>*/}
            
                </div>
            
        </div>
    )
}

export default Skills

/*<div className="titles">
                                    <img src="html5.png"/>
                                    <p>Html</p>
                                
                                </div>
                                <div className="titles">
                                    <img src="css3.png"/>
                                    <p>Css</p>
                                </div>
                                <div className="titles">
                                    <img src="js.png"/>
                                    <p>JavaScript</p>
                                </div>
                                <div className="titles">
                                    <img src="ts.png"/>
                                    <p>TypeScript</p>
                                </div>
                                <div className="titles">
                                    <img src="react.png"/>
                                    <p>React</p>
                                </div>*/