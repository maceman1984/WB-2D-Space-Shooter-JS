//lose script

//Public Variables
var loseQuote : String = "You Lose!";

//Private Variables

function OnGUI () 
{
//Make a group in the center of the screen
GUI.BeginGroup (Rect(Screen.width / 2 - 100, Screen.height / 2 - 100, 200, 100));

//make a box to see the group name
GUI.Box (Rect(0,0,200,100), loseQuote); 	//Or use the designer Input 

//Add buttons here
if(GUI.Button(Rect(60,60,80,30), "Main Menu")) 
{
Application.LoadLevel ("ScreenStartMenu");
}

GUI.EndGroup();
}