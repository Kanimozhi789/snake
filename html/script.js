

var blockSize=25;
var rows=20;
var cols=20;
var board;
var context;

var snakeX=blockSize*5;
var snakeY=blockSize*5;

var foodX;
var foodY;
var foodX1;
var foodY1;
var foodX2;
var foodY2;

var velocityX=0;
var velocityY=0;

var snakebody=[];
var gameover=false;
var a=[];
var color=["white","red","yellow"];
var score=0;





window.onload=function() {
    board=document.getElementById("board");
    
    board.height=rows*blockSize;
    board.width=cols*blockSize;
    context=board.getContext("2d");

    
    placefood();
    placefood1();
    placefood2();

   
    document.addEventListener("keyup",changeDirection);
    
    setInterval(update,2000/10);
}

function update(){
    if(gameover){
        return;
    }
    context.fillStyle="black";
    context.fillRect(0,0,board.width,board.height);

    
    
    
    context.fillStyle="white";
    context.fillRect(foodX,foodY,blockSize,blockSize);
    context.fillStyle="red";
    context.fillRect(foodX1,foodY1,blockSize,blockSize);
    context.fillStyle="yellow";
    context.fillRect(foodX2,foodY2,blockSize,blockSize);
    
    if(snakeX==foodX && snakeY==foodY){
        snakebody.push([foodX,foodY]);
        placefood();
        score+=1;
    }
    else if(snakeX==foodX1 && snakeY==foodY1){
            snakebody.push([foodX1,foodY1]);
            placefood1();
            score+=1;
    }
     else if(snakeX==foodX2 && snakeY==foodY2){
                snakebody.push([foodX2,foodY2]);
                placefood2();
                score+=1;
                
    }
    
        
        
       
    
    for(let i=snakebody.length-1;i>0;i--){
        snakebody[i]=snakebody[i-1];
    }
    if (snakebody.length){
        snakebody[0]=[snakeX,snakeY];
    }

    context.fillStyle="blue";
    snakeX+=velocityX*blockSize;
    snakeY+=velocityY*blockSize;
    
    context.fillRect(snakeX,snakeY,blockSize,blockSize);
    for(let i=0;i<snakebody.length;i++){
        context.fillRect(snakebody[i][0],snakebody[i][1],blockSize,blockSize);
        
    }
     
    if(snakeX<0||snakeX>cols*blockSize|| snakeY<0||snakeY>rows*blockSize){
        gameover=true;
        
        alert("game over and your score is "+score);
       
       
    }
    for (let i = 0; i < snakebody.length; i++) {
        if (snakeX == snakebody[i][0] && snakeY == snakebody[i][1]) {
            gameOver = true;
           
            alert("game over and your score is "+score);
            
           

        }
    }

   
}
function changeDirection(e){
    if(e.code=="ArrowUp"&& velocityY!=1){
        velocityX=0;
        velocityY=-1;
    }
    else if(e.code=="ArrowDown"&& velocityY!=-1){
        velocityX=0;
        velocityY=1;
    }
    else if(e.code=="ArrowLeft" && velocityX!=1){
        velocityX=-1;
        velocityY=0;
    }
    else if(e.code=="ArrowRight"&& velocityX!=-1){
        velocityX=1;
        velocityY=0;
    }

}
function placefood(){
    foodX=Math.floor(Math.random()*cols)*blockSize;
    foodY=Math.floor(Math.random()*rows)*blockSize;
}
function placefood1(){
    foodX1=Math.floor(Math.random()*cols)*blockSize;
    foodY1=Math.floor(Math.random()*rows)*blockSize;
}
function placefood2(){
    foodX2=Math.floor(Math.random()*cols)*blockSize;
    foodY2=Math.floor(Math.random()*rows)*blockSize;

}
