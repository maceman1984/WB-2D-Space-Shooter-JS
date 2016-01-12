#pragma strict

var shieldKeyInput 	: KeyCode; 
var shield 			: GameObject;
var playerSpeed 	: float;
static var score 	: int	= 0;


//private variables

function Awake () 
{
	shield.SetActive (false);
	ResetVaribales();
}

function Update () 
{
	transform.Translate (Input.GetAxisRaw ("Horizontal") * Time.deltaTime * playerSpeed, 0, Input.GetAxisRaw ("Vertical")* Time.deltaTime * playerSpeed);

	transform.position.x = Mathf.Clamp (transform.position.x, -4.64, 4.64); 
	transform.position.z = Mathf.Clamp (transform.position.z, -3.26, 3.2); 


		//Create shield
		if (Input.GetKeyDown(shieldKeyInput))
		{
		shield.SetActive (true);
		}
	if(score == 9)
	{
	Application.LoadLevel ("ScreenWin");
	}
}

function AddScore () 
{
	//add score varable + 1
	score +=1;
	print("score:" + score);
}

function ResetVaribales()
{
score = 0;
}