import React from 'react';
import './mymodal.css';


export const Modal = ({show , close}) => {

    return(
        <div className = "modal-wrapper"
        style = {{
            transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
             opacity : show ? '1' : '0' 
            } }  
        >
            <div className = "modal-header">
                <p> question title </p>
                <span><a class="waves-effect waves-light btn-large top-btn"  onClick={close}><i class="material-icons">close</i></a></span>
           </div>
           <div className = "modal-content row">
                <div className = "modal-questionblock col s12">
                    <p> problem description </p>

                </div>
                <div className = "question-link col s6">
                    <p> question link </p>
                </div>
                <div className = "hint-link col s6">
                   <span> <p> hint link </p></span>
                </div>
                
                <i class="small material-icons indigo-text text-darken-4 col s1 flag">flag</i>
                <div className = "validate">
                    <input type = "text" id = "flag" class = " col s5 offset-s2 " placeholder = "enter flag here"/>   
                
                    
                    <a class="waves-effect waves-light btn-large close-btn col s3 offset-s2"  onClick={close}><i class="material-icons right">send</i>CLOSE</a>
  
                </div>
                
           </div>
          
        </div>
        

        


    )
};
