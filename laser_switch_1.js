private var laser_beam: GameObject;

function OnCollisionEnter (theCollision: Collision) {
	if(theCollision.gameObject.name == "Cylinder"){
		//deactivates laserbeam_A
		laser_beam = gameObject.Find("laserbeam_A");
		laser_beam.active = false;
		//deactivates the light of the switch 
		this.light.enabled = false;
	}
}
