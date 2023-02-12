document.getElementById('btn-depo').addEventListener('click', function(){

    let amountField = document.getElementById('depo-amount');
    let depoAmountString = amountField.value;
    let depoAmount = parseFloat(depoAmountString);

    if(isNaN(depoAmount)){
        return;
    }

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

document.getElementById('depo-amount').addEventListener('keyup', function(event){

    let v= document.getElementById('depo-amount');
    let value= event.target.value;
    // let val= parseFloat(value);
    

    let b = document.getElementById('btn-depo');

    if(  value != '' ){
        b.removeAttribute('disabled');
        
        
        
    }
    else{
        b.setAttribute('disabled', true);
        
    }
   


})
