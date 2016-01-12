#pragma strict

//public variables 
var powerUpSpeed : float; 

//private variables



function Update () 
{
	transform.Translate (0, 0, powerUpSpeed * Time.deltaTime);
	
	if ((transform.position.z > 4.7) || (transform.position.z < -4.15))
		{
		Destroy (gameObject);
		}
}