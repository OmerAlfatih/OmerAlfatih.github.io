var names=new Array();
names[0]="Ayaty";
names[1]="Jacky";
names[2]="crasy";
names[3]="jessy";
names[4]="paul";
names[5]="valo";
names[6]="lorya";
names[7]="omer";
names[8]="laura";
names[9]="jon";
names[10]="messi";



for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}