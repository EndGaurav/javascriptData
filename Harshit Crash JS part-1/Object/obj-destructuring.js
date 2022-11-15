// Object destructuring
const band ={
    bandName : "The chainsmoker",
    Song : "Kills you slowly", 
    Artist : "Alex"
}

// by default key becomes the variable in object destructuring.  
// we can keep variable name by our choice apart from key name.
const {bandName, Song:gaana, Artist:singer} = band ;
console.log(bandName);
console.log(gaana);
console.log(singer);
