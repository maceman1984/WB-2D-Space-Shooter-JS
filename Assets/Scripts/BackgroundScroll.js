#pragma strict

//public variables 
var scrollSpeed : float;

//private variables

function Update () 
{
renderer.material.SetTextureOffset("_MainTex", Vector2(0, Time.time * scrollSpeed) );
}