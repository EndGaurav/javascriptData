// Splice method
// how do the splice method work ---> start, delete, insert.

const songs = ["it's ain't legal", "80 Degrees", "kills you slowly"];

// delete
// const deleted_song = songs.splice(1, 1);
// console.log(`Deleted song is ${deleted_song}`);
// console.log(songs);

// insert 
songs.splice(3,0,"itz hustle");
console.log(songs);

// delete and insert 
const Deleted_songs= songs.splice(0, 2,"its hustle");
console.log(songs);
console.log(`The deleted songs are ${Deleted_songs}`);