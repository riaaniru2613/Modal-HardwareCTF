import { Modal } from "./components/mymodal/mymodal" ;
import React , {useState} from 'react';


function App() {
  
    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);


  return (
    
    <div  >
     
      <div style = {{
      opacity : show ? '0.5' : '1' ,
       } }>
      { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
      
      <button onClick={() => setShow(true)} class="waves-effect waves-light btn modal-trigger">Open Modal</button>
      </div>
      
     <Modal show={show} close={closeModalHandler}/>
      
    </div>
    
  );
}

export default App;
