import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
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
                    <Button color="primary" size="lg" block>watch now</Button>{' '}                                      
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>)
    };
    export default Card;