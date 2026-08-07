type AgeProps={
    age:number
}
function Age({age}:AgeProps){

    return (
        <div>
            {age>=18 && <div>Age is {age} so u can login </div>
            
            ||
            
            <div>Not Allow to login</div>
            }

        </div>
    )
}

export default Age;