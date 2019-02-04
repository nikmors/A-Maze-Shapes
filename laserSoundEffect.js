public var laserAudio : AudioClip;
     
function laserSounder () {
     AudioSource.PlayClipAtPoint(laserAudio, transform.position, 0.1);
}

