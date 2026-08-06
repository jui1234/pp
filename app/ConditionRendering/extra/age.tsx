function AgeComponent (){
    let Age=12;
    return(
        <>
        {Age >= 18 && <h1>Age is 18 or above</h1>}
        </>
    );
}
export default AgeComponent;