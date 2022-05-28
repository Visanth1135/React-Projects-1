import React from'react'
import './popup.css'
function Popup({modal, children}){
    return(modal?(
        <div className="popup">
            <div className="popupi">
                <button onClick={modal(false)}>Close</button>
                {children}
            </div>
        </div>
    ): "")
}
export default Popup