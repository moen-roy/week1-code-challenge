 function calculateChaiIngredients(){
  let numberOfCups =prompt("Karibu! How many cups of Chai Bora would you like to make?");
  numberOfCups= parseFloat(numberOfCups);

  if (isNaN(numberOfCups) || numberOfCups <=0){
    alert("Enter a valid number of cups!");
      return;
  }

  let water= 200;
  let milk = 50;
  let tLeaves= 1;
  let sugar= 2;

  let message = (`To make 3 cups of Kenyan Chai, you will need:
              Water: ${water * numberOfCups}ml\n
              Milk: ${milk * numberOfCups}ml\n
              Tea Leaves (Majani):${tLeaves * numberOfCups}tablespoons\n
              Sugar (sukari): ${sugar * numberOfCups}teaspoons\n
              Enjoy your Chai Bora!`);
      console.log(message);
 }
 calculateChaiIngredients()