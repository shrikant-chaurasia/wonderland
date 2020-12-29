import react from "react";
import Sdata from "./Sdata";
import AppFooter from "../footer/Footer";
import Card from "./Cards";
import "./home.css";
function ncard(val){

    return(
       <Card  imgsrc={val.imgsrc}
         sname={val.sname}
        title={val.title}
       
        link={val.link}
 />
    );
   }



function Home(){

    return <>
    <h1 className="hedding_style">list of top 6 NETFLIX serise in 2020</h1>

    {Sdata.map(ncard)}
    <AppFooter/>
    
    </>;
}


export default Home; 
