 function  calculateChaiIngredients(){
   let  numberOfCups= ( prompt(Karibu! How many cups of Chai Bora would you like to make?));
    
   if(isNaN(numberOfCups)||numberOfCup <= 0)
     {
            console.log("Please enter a valid number of cup");
            return;
     }

    let water = numberOfCups * 200;
    let milk = numberOfCups * 50;
    let teaLeaves = numberOfCups * 1;
    let sugar = numberOfCups * 2;
}
