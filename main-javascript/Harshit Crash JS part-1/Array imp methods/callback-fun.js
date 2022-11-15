// callback Function
function watch_me(){
    console.log("Watch me in the callback function");
}

function showUp(callback){
    console.log("This is the show up function at the top");
    callback();

}
showUp(watch_me);
