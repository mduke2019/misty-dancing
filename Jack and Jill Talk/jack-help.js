misty.Debug("Jack help me")






misty.ChangeLED(150,0,250,0,100);     // Change LED to purple
           misty.PlayAudio("Jack help me.wav", 70,0,10); //play Jack's helping ask

//action("arms");
//action("move");
//action("arms");
//action("move");
//action("arms");
//action("move");
//action("speak");




function action(the_action){

    switch (the_action){


        case "arms":
            misty.MoveArms(-45, -45, 100, 100);
            misty.MoveArms(45, 45, 100, 100);
            misty.MoveArms(-45, -45, 100, 100);
            misty.MoveArms(45, 45, 100, 100);
            break //End Still

        case "move":
            misty.DriveTime(100, 0, 15000); // Turns Misty to her right
            break //End Still        

        case "speak":
           misty.PlayAudio("Jack help me.wav", 70,0,10); //play Jack's helping ask
            break //End Still            

    }

}
