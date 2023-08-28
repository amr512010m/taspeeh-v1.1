var x=document.getElementById('sscreen');
var y=document.getElementById('sbtn');
var i;
i=0;

	y.onclick=function(){
		x.innerText=i;
		i=i+1;
	}
