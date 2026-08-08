const KeyIdenti=()=>{
    const keysvaluesList=["a","b","c","d","e"];

    return(
        <>
        {
            keysvaluesList.map((value,index)=>(
                <h1 key={index}>{value} IDENTFY</h1>
            ))
        }
        </>
    )
       
      
}

export default KeyIdenti;