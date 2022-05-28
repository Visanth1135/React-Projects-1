import React from'react'
import './popup.css'
function Popup({modal, setModal}){
    return(modal?(
        <div className="popup">
            <div className="popupi">
                <button onClick={()=>setModal(false)}>Close</button>
                <h3>Modal opened</h3>
            </div>
        </div>
    ): "")
}
export default Popup