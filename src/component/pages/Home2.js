import React from "react";
import coding from "../../assets/coding.mp4"
import Scroll from "./Scroll";

import "./styleHome2.css"

const Home2=()=>{

    return(
     
            <div class="container" id="start">
				<div className="overlay"></div>
				<video src={coding} autoPlay loop muted/>
				<div className="content">
					<p>Full Stack Developer</p>
					<p>Norberto Manzanos</p>
					<div className="contentImg">
						<div className="imgFrontend">
							<img src="html5.png"/>
							
							<img src="css3.png"/>
							
							<img src="js.png"/>
							
							<img src="ts.png"/>
						
							<img src="react.png"/>
							
						</div>
						<div className="imgBackend">
							<img src="nodejsok.png" id="nodejs"/>
							<img src="mysql.png" id="nodejs"/>
							<img src="mongodb.png" id="nodejs"/>
						</div>
					
						
					</div>
					
					
				 </div>
	
			</div>

      
    )
}

export default Home2