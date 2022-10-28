import { useState } from "react"

export default function RadioButtons({chosenItem , callback}){
    let selectedMethod = chosenItem
    let handleChange = (event)=>{
        selectedMethod=event.target.value;
        callback(selectedMethod)
    }

    return(
        <>
        <div className="select__text">Select Method:</div>
        <div className="method__items">
            <div>
              <input
                type="radio"
                value="1"
                checked={selectedMethod =="1"}
                onChange={handleChange}
              />
              Using "https://ipapi.co"
            </div>
        
            <div>
              <input
                type="radio"
                value="2"
                checked={selectedMethod =="2"}
                onChange={handleChange}
              />
              Using "npm react-ip-details"

            </div>
            <div>
              <input
                type="radio"
                value="3"
                checked={selectedMethod =="3"}
                onChange={handleChange}
              />
              Using "geolocation-db.com" and "npm country-to-currency".
            </div>
            </div>
        </>
    )
}