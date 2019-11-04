// Sends a message for debug 
misty.Debug("Dance Party? Skill is starting!")

//Have a dance party with Misty

//TODO: Have Misty dance to different songs 

//Temporarily: hard code a specific dance
playCharacter("Still");

misty.MoveArms(0, 0, 100, 100);

misty.Pause(3000); //Wait 3 seconds
playCharacter("Wiggle");

misty.MoveArms(-45, 45, 100, 100);
misty.Pause(500);
misty.MoveArms(45, -45, 100, 100);

misty.Pause(3000); //Wait
playCharacter("Wiggle");

misty.MoveArms(-45, 45, 100, 100);
misty.Pause(500);
misty.MoveArms(45, -45, 100, 100);

misty.Pause(3000); //Wait
playCharacter("Wiggle");







// function _look_around(repeat = false) { <- maybe has to do with looping??


function playCharacter(characterName){

    switch (characterName){


        case "Still":
            //Have Misty return to a Default Initial Position for Misty Head and Arms

            //misty.MoveArms(left position, right position, left speed, right speed)
            misty.MoveArms(45, 45, 90, 90); //arms hanging down at side 45 degrees
            
            //misty.MoveHeadDegrees(pitch, roll, yaw, velocity, [int prePauseMs], [int postPauseMs]);
            misty.MoveHead(-10, 0, 0, 90, 50, 50);  //Move head looking straight forward and slightly up
            misty.DisplayImage("e_DefaultContent.jpg"); //Default Misty eyes

            break //End Still

        case "Wiggle":
            //Misty will now wiggle
            //TODO: choose and add a sound
            misty.Debug("Wiggle Selected");
            
            //change display and LED
            misty.ChangeLED(0,0,255,0,100); 
            misty.DisplayImage("e_Love.jpg");

            //misty.PlayAudio("_____.wav", 70,0,10);
            misty.ChangeLED(255,255,255, 0,100); //Change LED to white

            //misty.DriveTime(double linearVelocity, double angularVelocity, int timeMs, [double degree], [int prePauseMs], [int postPauseMs]);
            misty.DriveTime(0, -70, 5000); // Turns Misty to her right
            misty.ChangeLED(127,0,255,0,100);     // Change LED to purple
            misty.Pause(1000); //Wait 1 seconds

            misty.DriveTime(0, 70, 5000); // Turns Misty to her left
            misty.ChangeLED(255,255,255,0,100); //Change LED to white
            misty.Pause(1000); //Wait 1 seconds

            misty.DriveTime(0, -30, 5000);// Turns Misty to her right
            misty.ChangeLED(0,0,255,0,100);     // Change LED to blue
            misty.Pause(1000); //Wait 1 seconds

            misty.DriveTime(0, 30, 5000); // Turns Misty to her left
            misty.ChangeLED(255,255,255,0,100); //Change LED to white
            misty.Pause(1000); //Wait 1 seconds

            misty.DriveTime(0, -70, 5000); // Turns Misty to her right
            misty.ChangeLED(0,255,0,0,100);     // Change LED to green
            misty.Pause(1000); //Wait 1 seconds

            misty.DriveTime(0, 70, 5000); // Turns Misty to her left
            misty.ChangeLED(255,255,255,0,100); //Change LED to white
            misty.Pause(1000); //Wait 1 seconds

            misty.DriveTime(0, -30, 5000);// Turns Misty to her right
            misty.ChangeLED(255,255,0,0,100);     // Change LED to yellow
            misty.Pause(1000); //Wait 1 seconds

            misty.DriveTime(0, 30, 5000); // Turns Misty to her left
            misty.ChangeLED(255,255,255,0,100); //Change LED to white
            misty.Pause(1000); //Wait 1 seconds

            misty.DriveTime(0, -70, 5000); // Turns Misty to her right
            misty.ChangeLED(255,128,0,0,100);     // Change LED to orange
            misty.Pause(1000); //Wait 1 seconds

            misty.DriveTime(0, 70, 5000); // Turns Misty to her left
            misty.ChangeLED(255,255,255,0,100); //Change LED to white
            misty.Pause(1000); //Wait 1 seconds

            misty.DriveTime(0, -30, 5000);// Turns Misty to her right
            misty.ChangeLED(255,0,0,0,100);     // Change LED to red
            misty.Pause(1000); //Wait 1 seconds

            misty.DriveTime(0, 30, 5000); // Turns Misty to her left
            misty.ChangeLED(255,255,255,0,100); //Change LED to white



//            misty.PlayAudio("Wiggle-yeah.wav", 70,0,10); //play again

            break //End Wiggle


        case "Chewbacca":
            //Misty is Chewy - plays wav file, and raises arms
            misty.Debug("Chewbacca");

            //change display and LED
            misty.DisplayImage("e_Chewie.png");
            misty.ChangeLED(128,64,0,0,100); //Change LED to...maybe Brown 

            //MoveArms(left position, right position, left speed, right speed)
            misty.MoveArms(-25,-25, 80, 80); //move arms up like they are over head
            misty.MoveHead(-25, -2, 0, 90, 50, 50);  //Move head up

            //https://www.thesoundarchive.com/play-wav-files.asp?sound=starwars/chewy_roar.wav
            misty.PlayAudio("chewy_roar.wav", 99); //play at high volume

            break //End Chewbacca

        case "Zombie":
            //Misty is Zombie- plays wav file, and arms should move out in front
            misty.Debug("Zombie");
            
            misty.ChangeLED(128,128,0,0,100); //Change LED to sickly green
            misty.DisplayImage("e_Zombie.png");

            misty.Pause(500); 

            //Need to find a good zombie sound
            misty.PlayAudio("s_Fear.wav");

            //MoveArms(left position, right position, left speed, right speed)
            misty.MoveArms(0, 0, 70, 70); //start with both arms straight out            
            misty.MoveHead(-20, -5, 0, 90, 50, 50);  //Move head back and forth
            
            misty.MoveArms(-15, 18, 50, 50); //right arm slightly up and left slightly down, move slowly            
            misty.MoveHead(-20, 2, 0, 90, 50, 50);  //Move head back and forth
            
            misty.MoveArms(10, -18, 50, 50); //left arm slightly up and right slightly down, move slowly            
            misty.MoveHead(-20, -5, 0, 90, 50, 50);  //Move head back and forth
 
            //Need to find a good zombie sound
            misty.PlayAudio("s_Fear.wav");

            break //End Zombie


        
        case "ADD_ONE_HERE":
            //ADD MORE Halloween costumes here!
            //change display and LED
            //include a movement
            //include a sound
            break

    } //End switch case

}//End Play Character Function
