import React from "react";
import '../css/Home.css'
import image from '../images/oks.jpg'
import image1 from "../images/red-rock.jpg"
import image2 from '../images/mtn2.jpg'
import {NavLink} from 'react-router-dom';

const Home = () => {

  return (
   <>
 <div>

  <div className="as" width="100%">
   

    <div className="ops" style={{marginTop:"20px"}}>
       <h2 style={{color:"black", fontSize:"50px", float:"right", position:"relative", right:"750px", top:"150px", letterSpacing:"13px", width:"680px", textAlign:"center", borderRadius:"10px"}}> Terrain Recognition</h2>
        <h4 style={{color:"black", float:"right", position:"relative", right:"200px", top:"300px"}}>Terrain recognition opens our eyes to the intricate language of the land, </h4>
        <h4 style={{color:"black", float:"right",position:"relative", top:"340px", right:"0px"}}>teaching us to read the stories written in the earth's contours and embrace the wisdom embedded in every rise and fall</h4>
        <img src={image} alt="" width="35%" style={{position:"absolute", left:"970px", zIndex:"-1", borderRadius:"15px" }} id="images"/>
        <NavLink to='/upload' style={{textDecoration:"none", color:"Black", letterSpacing:"2px"}}><button style={{padding:"18px", border:"none", borderRadius:"10px", fontSize:"20px", cursor:"pointer", textDecoration:"none", position:"relative", top:"460px", backgroundColor:"orange", opacity:"0.8", width:"350px", left:"255px"}}>Try Now!</button></NavLink>
    </div>
  </div>
  <div className="works">
      <h2 style={{position:"relative", top:"700px", left:"30px"}}>How it Works?</h2>
      <h1 style={{position:"relative", top:"730px", left:"30px", letterSpacing:"5px"}}> Get Seamless Terrain Analysis in Three Steps</h1>
      <p style={{position:"relative", top:"800px", left:"30px", fontSize:"25px"}}>Ikshana employs cutting edge machine learning algorithms to analyze terrain data. Users input relvant data, and the system autimatically processes <br /> and classifies the terrain.</p>
      <p style={{position:"relative", top:"860px", left:"30px", fontSize:"25px"}}> It's as simple as uploading your data and receiveing real-time insights. Our technology acts as an additional "sense" for perceving the natural world.</p>
     </div>
<div className="imagescheck">
  <img src={image1} alt=""  style={{display:"block", position:"relative", top:"990px", left:"30px", width:"400px", borderRadius:"10px"}}/> <label htmlFor="name" style={{position:"relative", top:"1020px", left:"140px", fontSize:"30px"}}>Click a picture</label>
  <img src={image1}alt="" style={{display:"block", position:"relative", top:"690px", left:"560px", width:"400px",borderRadius:"10px"}}/> <label htmlFor="name" style={{position:"relative", top:"726px", left:"650px", fontSize:"30px"}}>Upload the picture</label>
  <img src={image1 }alt="" style={{display:"block", position:"relative", top:"395px", left:"1100px", width:"400px", borderRadius:"10px"}} /> <label htmlFor="name" style={{position:"relative", top:"424px", left:"1190px", fontSize:"30px"}}>Get a Terrain Analysis</label>
  <NavLink to='/upload' style={{textDecoration:"none", color:"white"}}><button className="tryme" style={{color:"white", position:"relative", left:"410px", top:"570px", fontSize:"30px", letterSpacing:"7px", backgroundColor:"black", borderRadius:"5px", width:"200px", cursor:"pointer"}}>Try Now!</button></NavLink>
</div>
 <div className="matters" style={{position:"relative", top:"650px", left:"60px"}}>
  <img src={image2} alt="mattters"  width="1400px" style={{borderRadius:"10px", zIndex:"-1"}}/>
  <h2  style={{color:"white", position:"relative", bottom:"300px", left:"30px"}}>Why it matters?</h2>
  <h3  style={{color:"white", position:"relative", bottom:"230px", left:"30px", letterSpacing:"1px"}}>Understanding terrains is pivotal in various domains, including defense, agriculture, and environmental management. </h3>
  <h3  style={{color:"white", position:"relative", bottom:"190px", left:"30px", letterSpacing:"1px"}}>Accurate terrain recognition enables informed decision-making, leading to enhanced operational efficency, safety and resource optimization.</h3>
 </div>

<footer style={{background:"black", border:"1px solid black", marginTop:"650px", height:"30px", color:"white", textAlign:"center",fontSize:"22px", width:"100%"}}> &copy; CopyRight Team Fortes, 2023.</footer>
 </div>
 </>
  );
};

export default Home;

