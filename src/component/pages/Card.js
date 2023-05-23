import React from "react";
import mockProjects from "../mock/Mock";
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import "./styleCard.css"

const Card=()=>{

    return(

        <div className="card-container-ok" id="projects">
            <h3>Proyectos</h3>
            <Grid container spacing={2} >
            {mockProjects.map((item)=>{
                return(
                <>
                    
                      <Grid item xs={12} md={4}>
                <div class="card-container">
                
                    <a href="/" class="hero-image-container" onClick={()=>window.open(item.linkSite)}>
                        <img class="hero-image" src={item.img} alt="Spinning glass cube" />
                    </a>
                    <div className="titleCard">
                        <p className="cardTitle">{item.title} </p>
                    </div>
                    
                    <main class="main-content">
                    
                        <div className="main-content-text">
                            <p>{item.description} </p>
                        </div>
                        <div class="flex-row">
                            <div class="coin-base">
                                <div>
                                <GitHubIcon/>
                                </div>
                                
                                <h2 onClick={()=>window.open(item.linkGit)} className="linkCard">Repositorio</h2>
                            
                            </div>
                            <div class="coin-base">
                                <div>
                                <LanguageIcon/>
                                </div>
                                
                                <h2 onClick={()=>window.open(item.linkSite)} className="linkCard">Sitio online</h2>
                            
                            </div>
                        </div>
                    </main>
                    <div class="card-attribute">
                        <img src="foto.jpg" alt="avatar" class="small-avatar"/>
                        <p>Creation of <span><a href="#">Norberto Manzanos</a></span></p>
                    </div>
                    
                </div>
                
                </Grid>     
                  
                      
                
                        
                
                </>
              
                )
            })}
               </Grid>
        </div>
    )
}

export default Card

/*<img src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png" alt="clock" class="small-image"/>*/
/* <img src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png" alt="clock" class="small-image"/>*/
/*  <section class="articles">
                    <article>
                        <div class="article-wrapper">
                        <figure>
                            <img src={item.img} alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>{item.title} </h2>
                            <p>
                           {item.description}
                            </p>
                            <a href="#" class="read-more">
                            Read more <span class="sr-only">about this is some title</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                            </a>
                        </div>
                        </div>
                    </article>
                 </section>*/