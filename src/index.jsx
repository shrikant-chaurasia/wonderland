import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import Card from "./Cards";
import Sdata from "./Sdata";

  
       
ReactDOM.render(
<>
<h1 className="hedding_style">list of top 6 NETFLIX serise in 2020</h1>

<Card  imgsrc={Sdata[0].imgsrc}
        sname={Sdata[0].sname}
       title={Sdata[0].title}
      
       link={Sdata[0].link}
/>
<Card  imgsrc={Sdata[1].imgsrc}
        sname={Sdata[1].sname}
       title={Sdata[1].title}
      
       link={Sdata[1].link}
/>
<Card  imgsrc={Sdata[2].imgsrc}
       sname={Sdata[2].sname}
       title={Sdata[2].title}
       
       link={Sdata[2].link}
/>
<Card
   imgsrc={Sdata[3].imgsrc}
   sname={Sdata[3].sname}
   title={Sdata[3].title}
   
   link={Sdata[3].link}
/>
<Card
    imgsrc={Sdata[4].imgsrc}
    sname={Sdata[4].sname}
    title={Sdata[4].title}
    
    link={Sdata[4].link}
/>
<Card
   imgsrc={Sdata[5].imgsrc}
   sname={Sdata[5].sname}
   title={Sdata[5].title}
   
   link={Sdata[5].link}
/>
<Card
   imgsrc={Sdata[5].imgsrc}
   sname={Sdata[5].sname}
   title={Sdata[5].title}
   
   link={Sdata[5].link}
/>

</>
,
document.getElementById("root")
);
