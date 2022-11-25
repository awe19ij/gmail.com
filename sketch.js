//let musicFile;
//let button;

var song;
var button;
//let musicFile;
function setup() {
    createCanvas(640, 480);
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('nuropi',loadmusic);
    //song =loadSound('nuropi', loaded);
    button = createButton('play');
    button.mousePressed(toggleplaying);
    background(51);
// ------------------------------------
        // let mysound;
        //mysound 
        //musicFile.play();
}

function toggleplaying(){
    if(!musicFile.isPlaying()){
        musicFile.play();
        musicFile.setVolume(0.3);
        button.html('pause');

    } 
    else{
        musicFile.stop();
        button.html('play');
    }
}

function loaded(){
    console.log('loaded');
}

function loadmusic() {
    musicFile.play();
} 

function draw() {

}

