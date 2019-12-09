misty.Debug("Jill help me")

misty.ChangeLED(150,0,250,0,100);     // Change LED to purple
misty.MoveArms(-45, -45, 100, 100);
misty.MoveArms(45, 45, 100, 100);
misty.MoveArms(-45, -45, 100, 100);
misty.MoveArms(45, 45, 100, 100);
misty.DriveTime(-80, 0, 5000); // Turns Misty to her right
misty.DisplayImage("e_DefaultContent.jpg");
misty.PlayAudio("Jill help me.wav", 70,0,10); //play Jack's helping ask
