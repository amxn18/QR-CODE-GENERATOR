let qrBox= document.querySelector("#imgBox");
let qrCode = document.querySelector("#qrCode");
let qrText = document.querySelector("#qrText");

function  generateQR() {
    if(qrText.value.length > 0){
        qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.add("error");
        },1000);
    }

}