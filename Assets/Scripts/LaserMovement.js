#pragma strict

//public variables 
var laserSpeed : float; 
//private variables



function Update () 
{
	transform.Translate (0, 0, laserSpeed * Time.deltaTime);
	
	if ((transform.position.z > 4.7) || (transform.position.z < -4.15))
		{
		Destroy (gameObject);
		}
}