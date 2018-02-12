
			var dobbelsteen = new Dice();
			var counter = 1;
			var werp = 0;
			
			function Dice (){
				this.sides = 6;
				this.icons = new Array();
				this.roll = function () {
				return  Math.floor(Math.random() * this.sides) + 1;
				}
			}
			
			for(i=1;i<7;i++){
				dobbelsteen.icons[i] = new Image();
				dobbelsteen.icons[i].src = 'Icons/dice/side'+i.toString()+'.png';	
			}

			function UpdateGraphisch(index,player) {
				if(player == "player1")
				{
					icon = new Image();
					icon.src = dobbelsteen.icons[index].src;
					document.getElementById("dubblesteen"+counter.toString()+"_res").src = dobbelsteen.icons[index].src;
					document.getElementById("value"+counter.toString()).innerHTML = index;
					console.log(index)
					counter++;
				}
				else{
					icon = new Image();
					icon.src = dobbelsteen.icons[index].src;
					document.getElementById("dubblesteen"+counter.toString()+"_res2").src = dobbelsteen.icons[index].src;
					document.getElementById("value"+counter.toString()+"_2").innerHTML = index;
					
					counter++;
				}
			}
			
			
			function Roll(player) {
			
				switch (player){
				
					case "player1":
					
					if(werp < 3){
						var points = new Array();
						for(i=0;i<5;i++){
						var result = dobbelsteen.roll();
						points.push(result);
						UpdateGraphisch(result,player);	
						}

						Check(points);


						werp++;
						if(werp == 3){document.getElementById("btn1").innerHTML = "finish";}
						else{document.getElementById("btn1").innerHTML = "Gooien "+werp;}



					}
					else{
						werp=0;
						GetSource1(); 
						document.getElementById("btn1").innerHTML = "Gooien"
						Disable(document.getElementById("btn1"));
						Enable(document.getElementById("btn2"));
					}
					
					counter = 1;
					break;	
					
					
					case "player2":
					
					if(werp < 3)
					{
						for(i=0;i<5;i++){
						var result = dobbelsteen.roll();
						UpdateGraphisch(result,player);
						}
						werp++;
						if(werp == 3){document.getElementById("btn2").innerHTML = "finish";}
						else{document.getElementById("btn2").innerHTML = "Gooien "+werp;}
					}
					else{
						werp=0; 
						GetSource2(); 
						document.getElementById("btn2").innerHTML = "Gooien"
						Disable(document.getElementById("btn2"));
						Enable(document.getElementById("btn1"));
					}
					
					counter = 1;
					break;	
				}	
			}
			
			
			function GetSource1(){
				for(i=1;i<6;i++){
					//src="Icons/dice/side1.png"
					//document.getElementById("dubblesteen"+i+"_res").src = dobbelsteen.icons[Math.floor(Math.random() * 5)+1].src;
					document.getElementById("dubblesteen"+i+"_res").src = src="Icons/yat.png"
					//document.getElementById("dubblesteen"+i+"_res2").src = dobbelsteen.icons[Math.floor(Math.random() * 5)+1].src;
					
					
					
					//document.getElementById("value"+i).innerHTML = Math.floor(Math.random() * 5)+1;
					document.getElementById("value"+i).innerHTML = 0;
					//document.getElementById("value"+i+"_2").innerHTML = Math.floor(Math.random() * 5)+1;
					
				}
			}
			function GetSource2(){
				for(i=1;i<6;i++){
					document.getElementById("dubblesteen"+i+"_res2").src = src="Icons/yat.png"
					document.getElementById("value"+i+"_2").innerHTML = 0;
					}
			}
			var Playerselected = false;

            function Disable(butt){
				butt.disabled = true;
				butt.style.background = "red";
			}
			
			function Enable(butt){
				butt.disabled = false;
				butt.style.background = "green";
			}
			function Active(index){
				Enable(document.getElementById("start"));
				Enable(document.getElementById("ExitBack"));
				Disable(document.getElementById("b1"));
				Disable(document.getElementById("b2"));
				Playerselected = true;
			}
			function LunchGame(){
				Disable(document.getElementById("start"));
				Enable(document.getElementById("btn1"));
				Playerselected = false;
			}
			function BreakGamer(){
				if(Playerselected){
					Disable(document.getElementById("start"));
					Disable(document.getElementById("ExitBack"));
					Enable(document.getElementById("b1"));
					Enable(document.getElementById("b2"));
					Playerselected = false;
				}
				else{
					Disable(document.getElementById("btn1"));
					Disable(document.getElementById("btn2"));
					Enable(document.getElementById("b1"));
					Enable(document.getElementById("b2"));
					Disable(document.getElementById("ExitBack"));
                    GetSource1();
                    GetSource2();
				}
				console.log(Playerselected);
			}
			
			function Active2(index){
				Enable(document.getElementById("start_menu2"));
				Enable(document.getElementById("ExitBack_menu2"));
				Disable(document.getElementById("b1_men2"));
				Disable(document.getElementById("b2_men2"));
				Playerselected = true;
			}
			function LunchGame2(){
				Disable(document.getElementById("start_menu2"));
				Enable(document.getElementById("btn1"));
				Playerselected = false;
			}
			function BreakGamer2(){
				if(Playerselected){
					Disable(document.getElementById("start_menu2"));
					Disable(document.getElementById("ExitBack_menu2"));
					Enable(document.getElementById("b1_men2"));
					Enable(document.getElementById("b2_men2"));
					Playerselected = false;
				}
				else{
					Disable(document.getElementById("btn1"));
					Disable(document.getElementById("btn2"));
					Enable(document.getElementById("b1_men2"));
					Enable(document.getElementById("b2_men2"));
					Disable(document.getElementById("ExitBack_menu2"));
                    GetSource1();
                    GetSource2();
				}
				console.log(Playerselected);
			}
			function Een(arry) {
				for(i=0;i<arry.length;i++){
					if(arry[i] == 1){return true;}
				}

            }
			function Check(punten) {
				if(Een(punten)){
					document.getElementById("Een").style.backgroundColor="yellow";
                    document.getElementById("Een").innerHTML="1";


				}
            }
