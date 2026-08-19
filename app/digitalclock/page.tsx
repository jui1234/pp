const DigitalClock=function(){
 setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 100000);

}
 export default DigitalClock;