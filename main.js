//reference for canvas 
canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

//height and width to the car image
var carHeight = 100;
var carWidth = 75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//initial position for a car image.
var carX = 5;
var carY = 5;

function add() {
	//upload car, and background images on the canvas.
	background = new Image();
	background.src = background_image;
	background.onload = uploadBackground();

	car= new Image;
	car.src = greencar_image;
	car.onload = uploadCar();
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background, 0, 0,canvas.width,canvas.height);

}

function uploadCar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car, carX, carY, carWidth, carHeight);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(carY > 0){
		carY -= 10;
		console.log("when up arrow is pressed, x="+ carX+"y="+carY);
		uploadBackground();
		uploadCar();
	}
}

function down()
{
	//Define function to move the car downward
	if(carY < 300){
		carY += 10;
		console.log("when down arrow is pressed, x="+ carX+"y="+carY);
		uploadBackground();
		uploadCar();
	}
}

function left()
{
	//Define function to move the car left side
	if(carX > 0){
		carX -= 10;
		console.log("when left arrow is pressed, x="+ carX+"y="+carY);
		uploadBackground();
		uploadCar();
	}
}

function right()
{
	//Define function to move the car right side
	if(carX < 725){
		carX += 10;
		console.log("when right arrow is pressed, x="+ carX+"y="+carY);
		uploadBackground();
		uploadCar();
		}

		
	
}
