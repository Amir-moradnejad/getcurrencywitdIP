import Table from './table'


export default function ShowResult(data){
    let currency = data.currency
    
    return(
    <div>
        <div className="title">Your Country Currency Is : <span className="title__currency">{currency}</span></div>
        <Table data={data}/>

    </div>
    )
}