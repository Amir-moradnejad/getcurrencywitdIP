function loading(){
    return(
        <>
            <div className="loading">
            <img className="loading__img" src={require('../img/loading.gif')}/>
            </div>
        </>
    )
}

function handleError(errro){
    return <div> {errro}</div>
}

export { loading , handleError}

