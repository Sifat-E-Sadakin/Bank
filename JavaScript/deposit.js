document.getElementById('btn-depo').addEventListener('click', function(){

    let amountField = document.getElementById('depo-amount');
    let depoAmountString = amountField.value;
    let depoAmount = parseFloat(depoAmountString);

    let depoField = document.getElementById('depo-total');
    let pDepoStr =depoField.innerText;
    let pDepo = parseFloat(pDepoStr);
    depoField.innerText=pDepo + depoAmount;

    amountField.value= '';
    
    let cbField= document.getElementById('cb');
    let cbStr= cbField.innerText;
    let cb= parseFloat(cbStr);

    cbField.innerText= cb + depoAmount;





})