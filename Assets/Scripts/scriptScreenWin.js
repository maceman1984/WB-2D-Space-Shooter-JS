//Win Script

//Public Variables
var winQuote : String = "You Win!";

//Private Variables

function OnGUI () 
{
	GUI.BeginGroup (Rect(Screen.width / 2 - 100, Screen.height / 2 - 100,200,100));
	
	GUI.Box (Rect(0,0,200,100), winQuote);
	
	if(GUI.Button (Rect(60,60,80,30), "Main Menu"))
	{
		Application.LoadLevel ("ScreenStartMenu");
	}
	GUI.EndGroup();
}