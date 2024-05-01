const contenedorQR  = document.getElementById('contenedorQR');
const formulario    = document.getElementById('formulario');
const btnDownload   = document.getElementById('dowload-qr');

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	QR.makeCode(formulario.link.value);
});

function donwload_image(){
    const QRPicture = document.getElementById('contenedorQR');
    if (QRPicture && QRPicture.lastChild.currentSrc) {
        const urlName           = formulario.link.value ? formulario.link.value : 'code-qr';
        btnDownload.download    = urlName;
        btnDownload.target      = '_blank';
        btnDownload.href        = QRPicture.lastChild.currentSrc;
        document.body.removeChild(btnDownload);
    }
}
