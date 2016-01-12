#pragma strict

//public variables 
var enemyLives 			: int 			= 2;
var explosion 			: GameObject;
var explosionSound 		: GameObject;
var sceneMan 			: GameObject; 			

//private variables

function OnTriggerEnter (col : Collider) 
{
	if (col.gameObject.tag == "Laser" && enemyLives > 0)
	{
	Instantiate (explosion, transform.position, transform.rotation); 
	Instantiate (explosionSound, transform.position, transform.rotation); 
	
	SubtractLife();
	collider.enabled = false;
	
	Destroy (col.gameObject); 
	
	yield WaitForSeconds (.2);
	collider.enabled = true;
	}
	else if (enemyLives == 0)
	{
	Instantiate (explosion, transform.position, transform.rotation); 
	Instantiate (explosionSound, transform.position, transform.rotation); 
	
	sceneMan.transform.GetComponent(PlayerMovement).AddScore();  

	Destroy (col.gameObject); 
	Destroy (gameObject); 
	}
}

function SubtractLife ()
{
	enemyLives -= 1;
}
