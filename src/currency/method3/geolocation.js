import React from "react";
import UseFetch from "../componens/comon/useFetch";
import ShowResult from "../componens/comon/showresult";
import countryToCurrency from "country-to-currency"


export default function Geolocation(){
    const endPoint = "https://geolocation-db.com/json/";
    let userInfo = UseFetch( endPoint);
    let loading = ()=> {
        return(
            <>
                <div className="loading">
                <img className="loading__img" src={require('../img/loading.gif')}/>
                </div>
            </>
        )
    }

    let handleError = (errro)=>{
        return <div> {errro}</div>
    }
    let result = userInfo.data;
    let countryCode=result.country_code;
    let currency = countryToCurrency[countryCode];
    result ={currency , ...result}
    let resultLength= Object.keys(result).length;

     
    return(
    <>
       {userInfo.loading && loading()}
       {userInfo?.status?.isError && resultLength==1 && handleError(userInfo?.status?.reciveError.message)}
       {resultLength> 1 && ShowResult(result)}
  
    </>
    )
}