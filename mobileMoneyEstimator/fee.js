function estimateTransactionFee(){

  const userInput = prompt(`Unatuma Ngapi? (KES)`);

  amountToSend = parseInt(userInput);

  if (isNaN(amountToSend) || amountToSend <= 0){

    alert("Please enter a valid value");
      return;
  }
  const minFee = 10;
  const maxFee = 70;
  const percentageFee = 0.015;

  let totalTransactFee = amountToSend * percentageFee;

  if (totalTransactFee <= "minFee"){

    totalTransactFee = minFee;

  }else if (totalTransactFee >= "maxFee"){

    totalTransactFee = maxFee;

  }else (totalTransactFee = totalTransactFee );

  let message =
    `sending cash ${amountToSend} \n` +
    `calculated transaction fee cash ${totalTransactFee}\n`+
    `Total amount to be debideted cash ${amountToSend+totalTransactFee}\n\n`+
    `Send Money Securely!`;


  console.log(message);
  alert (message);
}
estimateTransactionFee();