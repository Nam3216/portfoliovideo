import React from "react";
import mockProjects from "../mock/Mock";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from "./Card";
import "./styleProjects.css"


const Projects=()=>{


    return(
        <div className="projectsContainer">

            <h3>Proyectos</h3>
            <div className="projects">
            {mockProjects.map((item)=>{

                return(
                    <div  className="projectCont">
                    <Grid container spacing={2}   >
                        <Grid item xs={12} md={6} className="project">
                            <div className="projectText">
                                <p className="projectTitle">{item.title} </p>
                                <p>{item.description} </p>
                                <div className="SiteLinks">
                                    <p className="linksTitle">Visite la web: </p>
                                    <p> {item.linkSite}</p>
                                </div>
                                <div className="links">
                                    <p className="linksTitle">Codigo: </p>
                                    <p>{item.linkGit}</p>
                                </div>

                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} className="project">
                            <img src={item.img} alt="load"/>
                        </Grid>
                     </Grid>
                     </div>
                )
            })}
            
            </div>
      
        </div>
    )
}

export default Projects