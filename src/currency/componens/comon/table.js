import './table.css';

export default function Table({data}){
    let showTableRows = (items) =>{        
        return(
            <>
                {   
                    items.map((item , index)=>{
                        return <td  key={index}> {item}</td>
                    })
                
                }
             
            
            </> 
        ); 
    }

    return(
        <div>
            <table className="table">
                <thead>
                            <tr>
     
                            </tr>
                </thead>
                <tbody>
                     { Object.keys(data).map((key , index)=>{
                                let row = [key , data[key]]
                                return <tr key={index}>
                                    
                                    {showTableRows(row)}
                                </tr>                    
                    })} 
                
                </tbody>
            </table>
        </div>
    )
   
}