let password = prompt("Enter password: ");


int count = 0;

//create while loop, set loop continuation condition to count < 3
while (count <= 2) {            

    if ((!inputUsername.equals(userName)) || (!inputPassword.equals(password))) {       
        System.out.println("Wrong entry. try again: Enter username");
        inputUsername = input.next();

        System.out.println("Enter password");
        inputPassword = input.next();
    }   
    else
        System.out.println("You are now logged in");    

    count++;

    break;  
}

if (count > 2)
 System.out.println("You have enterede wrong three times. Please try again in a few hours");
 System.exit(0);
