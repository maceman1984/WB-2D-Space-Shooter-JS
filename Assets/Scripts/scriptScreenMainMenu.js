//Main Menu Script

//Public Variables

//Private Variables

function OnGUI() 
{
GUI.BeginGroup(Rect(Screen.width / 2 - 50, Screen.height / 2 - 50, 100, 175));

//make a box to see the group on screen
GUI.Box (Rect(0,0,100,175), "Main Menu");

//Add buttons for game navigation
if(GUI.Button (Rect(10,30,80,30), "Start Game"))
	{
		Application.LoadLevel ("Game");
	}
if(GUI.Button (Rect(10,65,80,30), "Exit"))
	{
		Application.Quit();
	}
if(GUI.Button (Rect(10,100,80,30), "Homepage"))
	{
		Application.OpenURL ("http://aigde.blogspot.com/");
	}
	GUI.EndGroup();
}