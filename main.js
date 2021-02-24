var canvas= new fabric.Canvas("myCanvas") ;

blockwidth= 50;
blockheight= 50;

playerx= 10;
playery= 10;

player_img = "";
block_img = "";

function player_update(){

fabric.Image.fromURL("player.png", function(Img){
player_img=Img;

player_img.scaleToWidth(150);
player_img.scaleToHeight(150);
player_img.set({top:playery, left:playerx});
canvas.add(player_img);
});
}

function block_image(get_image){

    fabric.Image.fromURL(get_image, function(Img){
    block_img=Img;
    block_img.scaleToWidth(blockwidth);
    block_img.scaleToHeight(blockheight);
    block_img.set({top:playery, left:playerx});
    canvas.add(block_img);
    });
}

window.addEventListener("keydown", key_down);

function key_down(e){

key_press = e.keyCode;
console.log(key_press);

if( key_press== '80'&& e.shiftKey==true ){
    console.log("Shift + P");
blockwidth=blockwidth +10;
blockheight=blockheight +10;
document.getElementById("current_width").innerHTML=blockwidth;
document.getElementById("current_height").innerHTML=blockheight;
}

if( key_press== '77'&& e.shiftKey==true ){
    console.log("Shift + M");
blockwidth=blockwidth -10;
blockheight=blockheight -10;
document.getElementById("current_width").innerHTML=blockwidth;
document.getElementById("current_height").innerHTML=blockheight;
}



if( key_press== '67' ){

    block_image('cloud.jpg');
    console.log("c");
}

if( key_press== '68' ){

    block_image('dark_green.png');
    console.log("d");
}

if( key_press== '71' ){

    block_image('ground.png');
    console.log("g");
}

if( key_press== '76' ){

    block_image('light_green.png');
    console.log("l");
}

if( key_press== '82' ){

    block_image('roof.jpg');
    console.log("r");
}

if( key_press== '84' ){

    block_image('trunk.jpg');
    console.log("t");
}

if( key_press== '85' ){

    block_image('unique.png');
    console.log("u");
}

if( key_press== '87' ){

    block_image('wall.jpg');
    console.log("w");
}

if( key_press== '89' ){

    block_image('yellow_wall.png');
    console.log("y");
}

if( key_press== '40' ){
    down();
    console.log("down");
}

if( key_press== '38' ){
    up();
    console.log("up");
}

if( key_press== '37' ){
    left();
    console.log("left");
}

if( key_press== '39' ){
    right();
    console.log("right");
}

}


function up(){

if ( playery >=0 ){
playery= playery-blockheight;
console.log("Block Height" + blockheight);
console.log("When Up arrow is press: X= "+ playerx + "and Y = " + playery);
canvas.remove(player_img);
player_update();
}
}

function down(){

    if ( playery <=500 ){
    playery= playery+blockheight;
    console.log("Block Height" + blockheight);
    console.log("When down arrow is press: X= "+ playerx + "and Y = " + playery);
    canvas.remove(player_img);
    player_update();
    }
    }

    function left(){

        if ( playerx >0 ){
        playerx= playerx - blockwidth;
        console.log("Block Height" + blockheight);
        console.log("When left arrow is press: X= "+ playerx + "and Y = " + playery);
        canvas.remove(player_img);
        player_update();
        }
        }

        function right(){

            if ( playerx <=850 ){
            playerx= playerx + blockwidth;
            console.log("Block Height" + blockheight);
            console.log("When right arrow is press: X= "+ playerx + "and Y = " + playery);
            canvas.remove(player_img);
            player_update();
            }
            }
