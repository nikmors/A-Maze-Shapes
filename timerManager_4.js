private var startTime:int;
private var intTime : int;
private var minutes: int;
private var seconds : int;
private var fraction : int;

public static var flag_Destroy: boolean = false;

function Start(){
	flag_Destroy = false;
	//initialize timer
	startTime -=Time.time; // Time.time for unity is like human time, u can't turn it to 0, (exception:) u just turn it back again
	//guiText enable
	guiText.enabled = true;
}


function Update () {
	timeTaken = startTime + Time.time; 
	guiText.text = FormatTime (timeTaken);
	
	if(seconds == 20){ 
		//player explode
		flag_Destroy = true; //Error: can't see the explosion before the player dies
		//guiText disable
		guiText.enabled = false;
		Invoke("RestartLevel", 5);
	}
}

function FormatTime(time){
	intTime = time;
	minutes = intTime / 60;
	seconds = intTime % 60;
	fraction = time * 1000;
	fraction = fraction % 100;
	timeText = String.Format ("{0:00}:{1:00}:{2:00}", minutes, seconds,fraction);
	return timeText;

}

function RestartLevel(){
	Application.LoadLevel ("level4");
}