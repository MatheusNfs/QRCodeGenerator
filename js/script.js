var form = document.getElementById('gen-form');
var qrcode = document.getElementById('qrcode');

//Creating the QR Code
function onSubmitQrCode(event){
    event.preventDefault();
    clearQR();
    var name = document.getElementById('name').value;
    var link = document.getElementById('link').value;
    var cardname = document.getElementById('card-name');
    var idcard = document.getElementById('card-id');
    var saveBtn = document.getElementById('dl-btn');
    // console.log(name,link); - values are being received.
    if(!name || !link){ 
        alert('Please, enter the required informations');
    }else{
        generateQRCode(link);
        cardname.innerHTML = name;
        idcard.classList.remove('d-none');
        saveBtn.classList.remove('d-none');
    }
}
//QR Code API
function generateQRCode(link){
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: link,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#cfe2ff",
        
    });
}
form.addEventListener('submit', onSubmitQrCode);

//Clear the page to create new code
function clearQR(){
    qrcode.innerHTML = '';
}

//Saving the QR Code card

var dlBtn = document.getElementById('dl-btn');
    dlBtn.onclick = function () {
        var image = document.querySelector('#card-id');
        html2canvas(image).then(canvas =>{
            var imgURL = canvas.toDataURL('image/png');
            console.log(imgURL);
            var dlink = document.createElement('a');
            dlink.setAttribute("href",imgURL);
            dlink.setAttribute('download', 'MyQRcode.png');   
            dlink.click();
            dlink.remove();     
        });
}
