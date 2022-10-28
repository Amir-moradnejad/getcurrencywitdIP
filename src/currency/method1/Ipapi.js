
import UseFetch from "../componens/comon/useFetch"
import ShowResult from "../componens/comon/showresult";
import { loading , handleError } from "../componens/utility";

export default function Ipapi(){
    const endPoint = "https://ipapi.co/json";
    let userInfo = UseFetch( endPoint);
    let resultLength= Object.keys(userInfo.data).length;

    return(
    <>
       {userInfo.loading && loading()}
       {userInfo?.status?.isError &&resultLength ==0 && handleError(userInfo?.status?.reciveError.message)}
       {resultLength && ShowResult(userInfo.data)}

    </>
    )
}