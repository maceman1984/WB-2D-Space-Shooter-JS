#pragma strict

//public variables 
var powerUpSound : GameObject; 
var powerUpSpeed : float; 
//private variables

function Update () 
{
	transform.Translate (0, 0, powerUpSpeed * Time.deltaTime);
	
	if (transform.position.z < -4.15)
		{
		ResetObject ();
		}
}

function OnTriggerEnter (col : Collider) 
{
	if (col.gameObject.tag == "Player") 
	{
	GameObject.Find ("Player").GetComponent(FireScript).PowerUpLaser();
	Instantiate (powerUpSound, transform.position, transform.rotation);
	ResetObject ();
	}
}

function ResetObject ()
{
		//Reset the position of the enemy
		transform.position.z = Random.Range (20, 40);
		transform.position.x = Random.Range (-4.26, 4.15);
}