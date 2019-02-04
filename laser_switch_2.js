private var laser_beamD: GameObject;

function OnCollisionEnter (theCollision: Collision) {
	if(theCollision.gameObject.name == "Cylinder"){
		//deactivates laserbeam_D
		laser_beamD = gameObject.Find("laserbeam_D");
		laser_beamD.active = false;
		//deactivates the light of the switch 
		this.light.enabled = false;
	}
}