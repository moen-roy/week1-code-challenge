function calculateBodaFare(){
    let userInput = prompt(`Unafika wapi Mkubwa? Kilometer ngapi?`);
    userInput = parseInt(userInput);

    if (isNaN(userInput) || userInput <=0){
        alert("Enter valid distance");
        return;
    }

    let baseFare = 50;
    let chargePerKm= 15;
    let kmFare= (userInput * chargePerKm);
    let totalFare= baseFare + (userInput* chargePerKm);

    let message =(`Uko kwote? Io ni ${userInput}km\n
         Ukikalia Pikipiki: KES${baseFare}\n
         Mpaka Uko: KES${kmFare}\n
         Total: KES${totalFare}\n`)

        alert(message);
    }

    calculateBodaFare();