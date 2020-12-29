
var gameState = "level1";
var star;
var man, man_running;
var ground, invisibleGround, groundImage;
var edu,unemp, poll, pand, gw;
var eduGroup, pollGroup,pandGroup, unempGroup, gwGroup;

var poll,unemp,edu;
var score=0;

var gameOver, restart, bg;

function preload(){
 // man_running =   loadAnimation("man1.png", "man2.png", "man3.png", "man4.png", "man5.png", "man6.png", "man7.png", "man8.png", "man10.png", "man11.png");
 man_running =   loadAnimation("man1.png", "man4.png", "man5.png", "man7.png"); 
 backgroundImg=loadImage('background12.jpg');
  pollImg = loadImage("poll123.jpg");
  umempImg=loadImage('unemployment.jpg');
  eduImg=loadImage('noBook.jpg');
  gwImg=loadImage('gw.jpg');
  pandImg=loadImage('pandemic.png');
  starImg=loadImage('star.png');
  bgImg=loadImage('abc.jpg');
  pencilImg=loadImage('pencil.png');
  jobImg=loadImage('briefcase.jpg');
  treeImg=loadImage('tree.png');
  vaccineImg=loadImage('vaccine.jpg');
  lawsImg=loadImage('laws123.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  star=createSprite(350,50,10,10);
  star.addImage(starImg);
  star.scale=0.03;

  

  man= createSprite(windowWidth/2,windowHeight/2,20,50);
  //man.velocityY=2;
  man.addAnimation("running", man_running);
  man.scale = 0.3;

  problem = createSprite(man.x,50);

 /* bg= createSprite(windowWidth/2,windowHeight/2);
  bg.addImage(bgImg);
  bg.scale=3.5;
  bg.velocityY=-2;*/
  
  /*ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -(6 + 3*score/100);
  
  edu = createSprite(150,100);
 edu.addImage(eduImg);
  */
 /* pov = createSprite(150,140);
 pov.addImage(povImg);*/
  
  eduGroup = new Group();
  unempGroup = new Group();
  pollGroup = new Group();
  pandGroup = new Group();
  gwGroup = new Group();
}

function draw() {
  background("white");
   text("STARS: "+ score, 500,50);
    problem.x = man.x;
    switch(gameState){
    case "level1": problem.addImage(eduImg);
                   problem.scale =0.06;
                   problem.velocityY = 1;
                  //bg.velocityY=-2;
                  EduCollection();
                  break;
    case "level2": problem.addImage(povImg);
                  problem.velocityY = 1.5;
                  bg.velocityY=-3;
                  unempCollection();
                  break;   
    case "level3": problem.addImage(pollImg);
                  problem.velocityY = 2;
                  bg.velocityY=-4;
                  pollCollection();
                  break;          
    case "level4": problem.addImage(gwImg);
                  problem.velocityY = 2.5;
                  bg.velocityY=-5;
                  pandCollection();
                  break; 
    case "level5": problem.addImage(pandImg);
                  problem.velocityY = 3;
                  bg.velocityY=-5;
                  gwCollection();
                  break;
    default: break;
      
  }
  
  if (gameState!=="end"){
   /* if(bg<0){
      bg.y=windowHeight/2;
    }*/
    if(keyDown("RIGHT_ARROW")){
      man.x=man.x+5;
    }
    if(keyDown("LEFT_ARROW")){
      man.x=man.x-5;
    }
    if(keyDown("UP_ARROW")){
      man.y=man.y-5;
    }
    if(keyDown("DOWN_ARROW")){
      man.y=man.y+5;
    }
    if (eduGroup.isTouching(man)){
     eduGroup.destroyEach();
    score=score+1;

   }
   if (pollGroup.isTouching(man)){
    pollGroup.destroyEach();
   score=score+1;

  }
  if (pandGroup.isTouching(man)){
    pandGroup.destroyEach();
   score=score+1;
  }
  if (gwGroup.isTouching(man)){
    gwGroup.destroyEach();
   score=score+1;
  }
  if (unempGroup.isTouching(man)){
    unempGroup.destroyEach();
   score=score+1;
  }
  /*if (problem.isTouching(man)){
    gameState = "end";
  }*/
  drawSprites();
  if(score === 5){
  Questions();
  }
  }
  if(gameState ==="end"){ 
  console.log("end");
 }
}
function EduCollection(){
  if (frameCount%50===0 && gameState=="level1"){
    var pencil = createSprite(random(400, windowWidth-400), random(problem.y, windowHeight), 100, 100);
    pencil.velocityX = 6;
    pencil.lifetime=500;
    pencil.addImage(pencilImg);
    pencil.scale =0.1;
    eduGroup.add(pencil);
      }
    
  }
function unempCollection(){
    if (frameCount%50===0 && gameState=="level2"){
      var job = createSprite(random(400, windowWidth-400), random(problem.y, windowHeight), 100, 100);
      job.velocityX = 6;
      job.lifetime=500;
      job.addImage(jobImg);
      job.scale =0.1;
      unempGroup.add(job);
      }
      
    }
function pollCollection(){
      if (frameCount%50===0  && gameState=="level3"){
        var tree = createSprite(random(400, windowWidth-400), random(problem.y, windowHeight), 100, 100);
       tree.velocityX = 6;
       tree.lifetime=500;
       tree.addImage(treeImg);
       tree.scale =0.1;
       pollGroup.add(tree);
       }
        
      }
      
function pandCollection(){
     if (frameCount%50===0 && gameState=="level4"){
          var vaccine = createSprite(random(400, windowWidth-400), random(problem.y, windowHeight), 100, 100);
          vaccine.velocityX = 6;
          vaccine.lifetime=500;
          vaccine.addImage(vaccineImg);
          vaccine.scale =0.1;
          pandGroup.add(vaccine);
         }
          
        }
function gwCollection(){
     if (frameCount%50===0 && gameState=="level5"){
            var laws = createSprite(random(400, windowWidth-400), random(problem.y, windowHeight), 100, 100);
            laws.velocityX = 6;
            laws.lifetime=500;
            laws.addImage(lawsImg);
            laws.scale =0.1;
            gwGroup.add(laws);
            }
           
          }
        
function Questions(){
    rect(900, 100, windowWidth,100);
    textSize(20);
    fill('red');
    var yes=createSprite(500,400,50,50);
    yes.loadImage('yes.png');
    var no=createSprite(500,400,50,50);
    no.loadImage('no.png');
    //Change Questions according to level, change gameState according to levels. 
    switch(gameState){
      case "level1": text(' Do you think that inequalities like gender and cultural identity should affect education’s reach?', 200,400);
                      if(mousePressedOver(yes)){
                        gameState = "end";
                      }else{
                        gameState = "level2";
                      }
                    break;
      case "level2": text(' Do you think that inequalities like gender and cultural identity should affect education’s reach?', 200,400);
                    break;  
      case "level3": text(' Do you think that inequalities like gender and cultural identity should affect education’s reach?', 200,400);
                    break;
      case "level4": text(' Do you think that inequalities like gender and cultural identity should affect education’s reach?', 200,400);
                    break;
      case "level5": text(' Do you think that inequalities like gender and cultural identity should affect education’s reach?', 200,400);
                    break;
      }

    }
  
  

