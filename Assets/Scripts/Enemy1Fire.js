#pragma strict

//public variables 
var enemyLaser : GameObject;
var fireFreq : float;

//private variables
private var lastShot : float;

function Update ()
{
if (Time.time > lastShot + fireFreq)
	Fire ();
}

function Fire()
{
	lastShot = Time.time;
	Instantiate (enemyLaser, transform.position, transform.rotation);
}