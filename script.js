var names=new Array();
names[0]="Youssef";
names[1]="Joe";
names[2]="Jamal";
names[3]="jasim";
names[4]="palin";
names[5]="farok";
names[6]="lamri";
names[7]="palin";
names[8]="lamri";
names[9]="jamil";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}