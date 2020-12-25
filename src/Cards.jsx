import React from "react";

function Card(props){
    return(
    <>
    
    <div>
        
        <div className='cards'>
            <div className='card'>
                <img src= {props.imgsrc} alt='mypic'  className='card_img' />
               <div className='card_info'>
                 <span className='card_category'>{props.title}</span>
                  <h3 className='card_title'>
                  {props.sname}
                  </h3>
                    <a href={props.link}  target='blank'>
                        <button >Watch now</button>                                            
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>)
    };
    export default Card;