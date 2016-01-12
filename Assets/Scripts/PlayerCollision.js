#pragma strict

//public variables 
var lives 			: int 			= 3;
//var shield 			: GameObject;
var explosion 		: GameObject;
var explosionSound 	: GameObject;

//private variables
function Update () 
{
	if(lives <= 0)
	{
	Application.LoadLevel ("SceneLose");
	lives = 3;
	}
}

function OnTriggerEnter (col : Collider) 
{
	if (col.gameObject.tag == "EnemyLaser" && lives > 0)
	{
	Instantiate (explosion, transform.position, transform.rotation); 
	Instantiate (explosionSound, transform.position, transform.rotation); 
	
	SubtractLife();
	collider.enabled = false;
	
	Destroy (col.gameObject); 
	
	yield WaitForSeconds (.3);
	collider.enabled = true;
	}
	else if (lives == 0)
	{
	Instantiate (explosion, transform.position, transform.rotation); 
	Instantiate (explosionSound, transform.position, transform.rotation); 
	
	Destroy (col.gameObject); 
	Destroy (gameObject); 

	}
}

function SubtractLife ()
{
	lives -= 1;
}