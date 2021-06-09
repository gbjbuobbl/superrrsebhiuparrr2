var canvas = new fabric.canvas('myCanvas');
Image_height = 30 ;
Image_width = 30 ;
player_x = 10 ;
player_y = 10 ;
var playerobject = "";

function player_update()

{

fabric.Image.fromURL("player.png", function (Img){

playerobject = Img;

playerobject.scaleToWidth(150);

player_object.scaleToHeight (140);

player_object.set({

top:player_y,

left:player_x

});

canvas.add(player_object);
});

}

function new_image(get_image)

{

fabric. Image.fromURL(get_image, function(Img) { 
    image_object = Img;
 image_object.scaleToWidth(image_width);
 image_object.scaleToHeight(image_height);

image_object.set({

top:player_y,

left:player_x

});
}
window.addEventListener("keydown", my_keydown());

 function my_keydown(e){
KeyPressed = e.KeyCode;
console.log(KeyPressed);
if (e.shiftKey == true && KeyPressed == "80") {
    console.log("shift + p is pressed together")
    image_width = image_width + 10 ;
    Image_height = Image_height + 10 ;
    document.getElementById("currunt-height").innerHTML = image_height ;
    document.getElementById("currunt-width").innerHTML = image_width ;
}
if (e.shiftKey == true && KeyPressed == "77") {
    console.log("shift + m is pressed together")
    image_width = image_width - 10 ;
    Image_height = Image_height - 10 ;
    document.getElementById("currunt-height").innerHTML = image_height ;
    document.getElementById("currunt-width").innerHTML = image_height ;
}
    if(keyPressed == "49"){
    
        new_image("download (1).jpg");
        
        console.log("1 key");
        }
    if(keyPressed == "53"){
    
        new_image("download (5).jpg");
            
        console.log("5 key");
        }
    if(keyPressed == "68"){
    
        new_image("download.jpg");
                
        console.log("d key");
    }
    if(keyPressed == "105"){
    
        new_image("OIP.jpg");
        
        console.log("o key");
        }
        if(keyPressed == "106"){
    
            new_image("images.jpg");
            
            console.log("i key");
            }
    
               }



        
              