
function OnCollisionEnter (theCollision: Collision) {
	if(theCollision.gameObject.name == "Cylinder"){
		Debug.Log("finish!");
		//go next level
		Application.LoadLevel ("level5");
	}
}