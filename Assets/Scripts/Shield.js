#pragma strict

//Public Variables
var shieldStrength	: int = 3;
var shield 			: GameObject;
var explosion 		: GameObject;
var explosionSound 	: GameObject;
//Private Variables



function OnTriggerEnter (col : Collider) 
{
	if (col.gameObject.tag == "EnemyLaser" && shieldStrength > 0)
	{
	Instantiate (explosion, transform.position, transform.rotation); 
	Instantiate (explosionSound, transform.position, transform.rotation); 
	
	SubtractShield();
	
	Destroy (col.gameObject); 
	}
	else if (shieldStrength == 0)
	{
	Instantiate (explosion, transform.position, transform.rotation); 
	Instantiate (explosionSound, transform.position, transform.rotation); 
	
	Destroy (col.gameObject); 
	shield.SetActive (false);
	}
}

function SubtractShield ()
{
	shieldStrength -= 1;
}