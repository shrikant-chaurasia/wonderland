import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import Card from "./Cards";
import Sdata from "./Sdata";

  function ncard(val){

  

   return(
      <Card  imgsrc={val.imgsrc}
        sname={val.sname}
       title={val.title}
      
       link={val.link}
/>
   );
  }
       
ReactDOM.render(
<>
<h1 className="hedding_style">list of top 6 NETFLIX serise in 2020</h1>

{Sdata.map(ncard)}

</>
,
document.getElementById("root")
);
