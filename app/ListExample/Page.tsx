import FruitsList from './list'
const ListComponent =() =>{

    return (
        <>
       {
        FruitsList.map((fruits,index)=>{
            return(
                <h1 key={index}>{fruits}</h1>
            )
        })
       }
        </>
    )
}

export default ListComponent;