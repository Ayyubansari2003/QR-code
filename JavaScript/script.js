<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>


function generateQRCode(){
   const text=document.getElementById("text").value;
   const qrCodeContainer=document.getElementById("qrcode");

   qrCodeContainer.innerHTML="";
   if(text.trim()!==""){
    new QRCode(qrCodeContainer,{
        text:text,
        height:150,



        
        width:150,
    })
   }
}
    
