import React,{useState} from "react"
import SkillBar  from 'react-skillbars';
import Grid from '@mui/material/Grid';
import "./styleSkillsBar.css"

const SkillsBar=()=>{
    

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
        bar: "#006699",/*"#808080"*/
        
        title: {
          text: "#FF0000",
          background: "#000000"
        }
      };

    return(
        <div className="skillsBarContainerCont">
              <Grid container spacing={2} >
              <Grid item md={6} xs={12} className="bio-title-about">
                    <div className="skillBarContainer">
                        <div className="skillBarContainerImg">
                            <img src="foto.jpg" alt=""/>
                        </div>
                        <div className="skillBarContainerText">
                            <p>Estas son las principales habilidades tecnicas que poseo. Para cuando este leyendo esto, seguramente este a punto de sumar una mas.
                            </p>
                        </div>
                    </div>
                </Grid>
                <Grid item md={6} xs={12} className="bio-title-about">
                    <div className="SkillsBarContainerBar">
                        <SkillBar skills={skills} height={'3vh'} animationDelay={600} colors={colors}  />
                    </div>
                </Grid>

              </Grid>

        </div>
    )
}

export default SkillsBar