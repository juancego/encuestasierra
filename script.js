document.getElementById('startSurveyButton').addEventListener('click', function() {
    document.getElementById('introContainer').style.display = 'none';
    document.getElementById('surveyContainer').style.display = 'block';
});

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const conductor = document.getElementById('conductor').value;
    const vehiculo = document.getElementById('vehiculo').value;
    const horarios = document.getElementById('horarios').value;
    const normas = document.getElementById('normas').value;
    const uniforme = document.getElementById('uniforme').value;
    const aseo = document.getElementById('aseo').value;
    const satisfaccion = document.getElementById('satisfaccion').value;
    const comentarios = document.getElementById('comentarios').value;

    // Aquí puedes agregar la lógica para enviar los datos a tu servidor
    // Por ejemplo, usando fetch para enviar una solicitud POST

    document.getElementById('surveyContainer').style.display = 'none';
    document.getElementById('thankYouContainer').style.display = 'block';
});

document.getElementById('visitWebsiteButton').addEventListener('click', function() {
    window.open('https://www.tu-sitio-web.com', '_blank'); // Reemplaza con la URL de tu página web
});
