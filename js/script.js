var chess=document.getElementById('chess');
var me=true;
var board=[];
for (var i=0;i<20;i++) {
	board[i]=[];
	for (var j=0;j<20;j++) {
		board[i][j]=0;
	}
}
var context=chess.getContext('2d');

context.strokeStyle='#bfbfbf';

var logo= new Image();
logo.src="img/shuiyin.png";
logo.onload=function(){
	context.drawImage(logo,275,275,50,50);
	drawLine();
}



function drawLine(){
	for (i=0;i<20;i++) {
	context.moveTo(15+30*i,15);
	context.lineTo(15+30*i,585);
	context.stroke();
	context.moveTo(15,15+30*i);
	context.lineTo(585,15+30*i);
	context.stroke();
}
}

var oneStep=function(i,j,me){	
	context.beginPath();
	context.arc(15+30*i,15+30*j,13,0,2*Math.PI);
	context.closePath();
	var gradient=context.createRadialGradient(15+30*i+2,15+30*j-2,13,15+30*i+2,15+30*j-2,0);
	if(me){
		gradient.addColorStop(0,"#0A0A0A");
	    gradient.addColorStop(1,"#636766");
	}else{
		gradient.addColorStop(0,"#D1D1D1");
	    gradient.addColorStop(1,"#F9F9F9");
	}

	context.fillStyle=gradient; 
	context.fill();
}

chess.onclick=function(e){
	var x=e.offsetX;
	var y=e.offsetY;
	var i=Math.floor(x/30);
	var j=Math.floor(y/30);
	if(board[i][j]==0){
		oneStep(i,j,me);
		if(me==true){
			board[i][j]=1;
		}else{
			board[i][j]=2;
		}
		  me=!me;
	}
}
