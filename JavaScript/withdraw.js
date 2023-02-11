document.getElementById('w').addEventListener('click', function(){

    let amountField= document.getElementById('w-amount');
    let wStr= amountField.value;
    let wAmount = parseFloat(wStr);

    let wField = document.getElementById('w-total');
    let wTotalStr = wField.innerText;
    let wTotal = parseFloat(wTotalStr);

    let w = wAmount + wTotal;
    wField.innerText=w;
    amountField.value = '';


    let cbField= document.getElementById('cb');
    let cbStr= cbField.innerText;
    let cb= parseFloat(cbStr);

    let ncb= cb - wAmount;
    cbField.innerText = ncb;

})