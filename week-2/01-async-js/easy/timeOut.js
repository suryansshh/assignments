

function interval(currcount , maxCount , delay) {
    console.log(currcount);
    if(currcount<maxCount){
       setTimeout(function (){
        interval(currcount+1 , maxCount , delay)
       } , delay);
    }
}
interval(0 , 10 , 1000);