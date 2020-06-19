var cv;
		var cx;
		var pocetakx;
		var pocetaky;
		var pokrenuto=0;
		var radi=0;
		var boja="black";
		var poluprecnik;
		var s;
		var kvadrat;
		var tekst;
		var font;

		function init(){
			cv=document.getElementById("cvs");
			cx=cv.getContext("2d");
			cx.fillStyle="white";
			cx.fillRect(0,0,cv.width,cv.height);
			pisi();
		}
		window.onload=init;

		function pisi(){
				pokrenuto=1;
				cv.addEventListener("mousedown",klikni);
				cv.addEventListener("mousemove",vuci);
        		cv.addEventListener("mouseup", pusti);
				function klikni() {
					radi=1;
					krajx=pocetakx;
					krajy=pocetaky;
					cx.beginPath();
				}
				function pusti(){
        			radi=0;
					cx.closePath();
        		}
				function vuci() {
					if(radi==1 && pokrenuto==1){
						cx.lineWidth=1;
						cx.moveTo(krajx,krajy);
						cx.lineTo(pocetakx,pocetaky);
						krajx=pocetakx;
						krajy=pocetaky;						
						cx.strokeStyle=boja;
						cx.closePath();
						cx.stroke();
						cx.beginPath();
					}
				}
		}
		function brisi(){
				pokrenuto=2;
				cv.addEventListener("mousedown",klikni);
				cv.addEventListener("mousemove",vuci);
        		cv.addEventListener("mouseup", pusti);
				function klikni() {
					radi=1;
					krajx=pocetakx;
					krajy=pocetaky;
					cx.beginPath();
				}
				function pusti(){
        			radi=0;
					cx.closePath();
        		}
				function vuci(){
					if(radi == 1 && pokrenuto==2){
						cx.lineWidth = 10;
						cx.moveTo(krajx,krajy);
						cx.lineTo(pocetakx,pocetaky);
						krajx = pocetakx;
						krajy = pocetaky;
						cx.strokeStyle = "white";
						cx.closePath();
						cx.stroke();
						cx.beginPath();

					}
				}
		}
		
		function black(){ boja="black"; }
		function red(){ boja="red"; }
		function blue(){ boja="blue"; }
		function yellow(){ boja="yellow"; }
		function orange(){ boja="orange"; }
		function purple(){ boja="purple"; }
		
		function slika1(){pokrenuto=3;}
		function slika2(){pokrenuto=4;}
		function slika3(){pokrenuto=5;}
		function slika4(){pokrenuto=6;}

		function kv(){pokrenuto=7; kvadrat=parseInt(window.prompt("UNESI DUŽINU STRANICE:"));}
		function pravougaonik(){pokrenuto=8;}
		function krug(){pokrenuto=9; poluprecnik=parseInt(window.prompt("UNESI ŠIRINU POLUPREČNIKA:"));}
		function tekst(){pokrenuto=10;  tekst=window.prompt("UNESI TEKST:"); font=window.prompt("UNESI VELIČINU FONTA:");}
		function ocisti(){
			cx.fillStyle="white";
			cx.fillRect(0,0,cv.width,cv.height);
		}
		
		function pozicija(e) {
			var pk=cv.getBoundingClientRect();
			pocetakx=e.clientX-pk.x;
			pocetaky=e.clientY-pk.y;
		}

		function main(){
			
			if(pokrenuto==3){
				s=document.getElementById("slika1");
				cx.drawImage(s,pocetakx-50,pocetaky-50,100,100);
			}
			if(pokrenuto==4){
				s=document.getElementById("slika2");
				cx.drawImage(s,pocetakx-50,pocetaky-50,100,100);
			}
			if(pokrenuto==5){
				s=document.getElementById("slika3");
				cx.drawImage(s,pocetakx-50,pocetaky-50,100,100);
			}
			if(pokrenuto==6){
				s=document.getElementById("slika4");
				cx.drawImage(s,pocetakx-50,pocetaky-50,100,100);
			}
						
			if(pokrenuto==7){
				cx.fillStyle=boja;
				cx.fillRect(pocetakx-kvadrat/2,pocetaky-kvadrat/2,kvadrat,kvadrat);
			}
				 
			if(pokrenuto==8){
				cv.addEventListener('mousedown', klikni);
  				cv.addEventListener('mouseup', pusti);
  				cv.addEventListener('mousemove', vuci);
				function klikni(e) {
					cx.startX = e.pageX - this.offsetLeft;
					cx.startY = e.pageY - this.offsetTop;
					radi = 1;
				}
				function pusti() {
  					radi = 0;
  				}
				function vuci(e) {
					if (radi == 1 && pokrenuto == 8) {
					cx.w = (e.pageX - this.offsetLeft) - cx.startX;
					cx.h =(e.pageY - this.offsetTop) - cx.startY;
					pravougaonikCrtanje();
					}
				}
			}
			function pravougaonikCrtanje() {
				cx.fillStyle=boja;
  				cx.fillRect(cx.startX, cx.startY, cx.w, cx.h);
			}
			
			if(pokrenuto==9){
				cx.beginPath();
      			cx.arc(pocetakx,pocetaky,poluprecnik,Math.PI*2,false);
      			cx.fillStyle=boja;
     			cx.fill();
      			cx.lineWidth=5;
      			cx.strokeStyle=boja;
      			cx.stroke();
			}

			if(pokrenuto==10){
				cx.fillStyle=boja;
				cx.font=font+"px Arial Black";
				var duzina=tekst.length;
				cx.fillText(tekst,pocetakx-(duzina/3)*(font),pocetaky+(font/3));
			}
		}
