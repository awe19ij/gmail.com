let musicFile;
let button;

//var song;
//var button;
//let musicFile;
function setup() {
    createCanvas(640, 480);
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('nuropi',loadmusic);
    //song =loadSound('nuropi', loaded);
    button = createButton("play");
    button.mousePressed(toggleplaying);
// ------------------------------------
        // let mysound;
        //mysound 
        //musicFile.play();
}

function toggleplaying(){
    if(!musicFile.isPlaying()){
        musicFile.play();
        button.html('pause');
    }else{
        musicFile.stop();
        button.html('play');
    }
}

function loadmusic(){
    console.log('it's aaaa');
}

//function loadmusic() {
//    musicFile.play 

function draw() {
    FileList(255,0,0);
    ellipse(50, 50, 100, 100);
}

