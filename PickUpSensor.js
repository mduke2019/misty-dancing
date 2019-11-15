//function getIMU() {
	misty.AddReturnProperty("getIMU", "zAcceleration");
	misty.RegisterEvent("getIMU", "IMU", 1000, false);
//}

function _getIMU(data) {
	var currentzAcceleration = data.AdditionalResults[0];
	misty.Set("currentzAcceleration", currentzAcceleration.toString());
	//misty.Debug("current zAcceleration: " + misty.Get("currentzAcceleration"));
	if (currentzAcceleration > -9.65) {
		misty.ChangeLED(144, 0, 230);
		misty.PlayAudio("Thank_You-Sophie.wav");
		misty.DisplayImage("e_Admiration.jpg");
		misty.Debug("Misty was picked up!");
		//misty.UnregisterEvent("getIMU");
	} else {
		misty.Debug("Misty was not picked up")
		misty.AddReturnProperty("getIMU", "zAcceleration");
		misty.RegisterEvent("getIMU", "IMU", 1000, false);
	}
}

//getIMU();