import { useState } from "react";
import RadioButtons from "./componens/radiobuttons";
import Ipapi from "./method1/Ipapi";
import IpDetailsPackage from "./method2/IpDetailsPackage";
import Geolocation from "./method3/geolocation"
import './style.css';


export default function Home(){

    const [selectedMethod , setSelectedMethod] = useState("1");

    let handleChange = (selectedMethod)=>{
        setSelectedMethod(selectedMethod)
    }
    return(
      <>
        <RadioButtons chosenItem ={selectedMethod}  callback ={handleChange}/>
        <div className="response__section">
          {selectedMethod =="1" && <Ipapi/>}
          {selectedMethod =="2" && <IpDetailsPackage/>}
          {selectedMethod =="3" && <Geolocation/>}
          
        </div>


      </>
    )
      
}
