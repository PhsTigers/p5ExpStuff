let inp1;let multvec=[];
let par0,sl0;let par1,sl1;
let par2,sl2;let par3,sl3;
let rad2;let picmov,movA,mov2,picmovSt,picmovVel;
let picmovStA,picmovVelA;
let parintro,ret;

function start2(){
parintro=select('#hpartest');parintro.position(1000,250);
parintro.id('parent1');
ret=select('#listR');ret.parent('parent1');

multvec=[20,30,40,50,100];

picmovStA=createVector(150,50,);
picmovVelA=createVector(-3,4);
picmovSt=createVector(50,50,);
picmovVel=createVector(3,4);
picmov=select('#movingpic');
movA=new move(picmovStA,picmovVelA);	
mov2=new move(picmovSt,picmovVel);	

inp1=createInput("len1,dir1,len2,dir2,amt");inp1.class('bdd');
inp1.position(800,50);
inp1.changed(chglev1);

par0=createP("first length");par0.position(800,90);
par0.id('p0');par0.class('parbdd');
sl0=createSlider(0,150,50,1);
sl0.parent('p0');sl0.mousePressed(chgmult0);

par1=createP("first angle");par1.position(800,190);
par1.id('p1');par1.class('parbdd');
sl1=createSlider(0,180,50,2);
sl1.parent('p1');sl1.mousePressed(chgmult1);

par2=createP("second length");par2.position(800,280);
par2.id('p2');par2.class('parbdd');
sl2=createSlider(0,150,50,5);
sl2.parent('p2');sl2.mousePressed(chgmult2);

par3=createP("second angle");par3.position(800,370);
par3.id('p3');par3.class('parbdd');
sl3=createSlider(0,180,50,2);
sl3.parent('p3');sl3.mousePressed(chgmult3);

rad2=createRadio("choose a Rec.Shape");rad2.class('radbdd');
rad2.position(1000,110);
rad2.option('Sier',1);
rad2.option('koch',2);
rad2.option('clear',3);
rad2.option('bkgrd',4);
rad2.option('no bkgrd',5);
rad2.mousePressed(chgRec);


}

function chglev1(){
let mult=inp1.value();
multvec=mult.split(',').map(n=>floor(n));
//for(let j=0;j<5;j++){
//multvec[j]=	mult.split(',').map(n => floor(n))[j];
//}
}

function chgmult0(){
multvec[0]=sl0.value();
}

function chgmult1(){
multvec[1]=sl1.value();
}
function chgmult2(){
multvec[2]=sl2.value();
}
function chgmult3(){
multvec[3]=sl3.value();
}

function chgRec(){
let choice=rad2.value();
if(choice){
switch (choice){
	case '1':tChoice.set1(200,300,-60);
	StriA(tChoice,150,5);break;
	case '2':tChoice.set1(10,450,0);
	koch(tChoice,100,6);break;
	case '3':break;
	case '4':background(200,200,100);break;
	case '5':clear();break;
	}}
	}

function duoPoly(t,len1,dir1,len2,dir2,total)
{
	let amt=1;
	do{
		t.vec(amt*dir1,len1);
		t.vec(amt*dir2,len2);
		amt+=1;
	}while(amt<total);
}
		
function triPoly(t,len1,dir1,len2,dir2,len3,dir3,total)
{
	let amt=1;
	do{
		t.vec(amt*dir1,len1);
		t.vec(amt*dir2,len2);
		t.vec(amt*dir3,len3);
		amt+=1;
	}while(amt<total);
}
