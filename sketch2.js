let can;let tv;let tChoice;
//let choice=0;
function setup(){
can=createCanvas(700,500);can.position(30,25);
can.class('bdd');	
start2();
tv=new logo(200,200,0);
tChoice=new logo(200,200,0);
}

function draw(){

mov2.move();mov2.chWbdd();
picmov.position(mov2.pos.x,mov2.pos.y);
background(200,100,50);
//clear();
ellipse(50,50,30,30);	
tv.set1(450,150,0);
duoPoly(tv,multvec[0],multvec[1],multvec[2],multvec[3],multvec[4]);
//triPoly(tv,60,60,50,122,75,-33,100);
text("1st length "+multvec[0],30,400);
text("2ch length "+multvec[2],30,420);
text("1st angle "+multvec[1],30,440);
text("2cd angle "+multvec[3],30,460);
let choice=rad2.value();
if(choice){
switch (choice){
	case '1':tChoice.set1(200,300,-60);
	StriA(tChoice,150,5);
	break;
	case '2':tChoice.set1(10,450,0);
	koch(tChoice,100,6);
	break;
	case '3':
	break;
	}}
movA.move();movA.chbdd();movA.show();

}

