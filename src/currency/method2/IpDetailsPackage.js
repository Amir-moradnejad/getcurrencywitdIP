
import React from "react";
import useReactIpLocation from "react-ip-details";

export default function IpDetailsPackage() {
  let data =useReactIpLocation({numberToConvert: 1})
  return (
    <div>
      {`Local currency string format is ${data.currencyString}`}
    </div>
  );
}