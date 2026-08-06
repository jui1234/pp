"use client";
function ConditionRendering() {
    let isUserLoggedIn = false;
    return(
        <>
        {isUserLoggedIn ? (
            <h1>User is Logged In</h1>
        ) : (
            <h1>User is Not Logged In</h1>
        )}
        </>
    );
    }
    export default ConditionRendering;