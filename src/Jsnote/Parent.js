const Lexicalscope=()=>{
    function Parents(){
        let a=0;

        console.log("a = Parents",a)

        function Child(){
            console.log("a = child ",a)

            return a;
        }

        a=6;

        let childstore=Child();
    return childstore;
    }


   const ans= Parents();
   console.log("final ans",ans)

   return ans;
}

console.log(Lexicalscope())