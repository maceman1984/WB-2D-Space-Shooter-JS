#pragma strict

//public variables 
var initPos : Vector3; 
var enemyWiggle : Vector2; 
var enemySpeed : float;


//private variables

function Start () 
{
	initPos = transform.position; 
}

function Update () 
{
	transform.position.x = initPos.x + Mathf.PingPong (Time.time * enemySpeed, enemyWiggle.x);
	transform.position.z = initPos.z + Mathf.PingPong (Time.time * enemySpeed, enemyWiggle.y);

}