document.getElementById('startSurveyButton').addEventListener('click', function() {
    document.getElementById('introContainer').style.display = 'none';
    document.getElementById('surveyContainer').style.display = 'block';
});

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const calidad = document.getElementById('calidad').value;
    const puntualidad = document.getElementById('puntualidad').value;
    const amabilidad = document.getElementById('amabilidad').value;
    const comentarios = document.getElementById('comentarios').value;

    // Aquí puedes agregar la lógica para enviar los datos a tu servidor
    // Por ejemplo, usando fetch para enviar una solicitud POST

    document.getElementById('surveyContainer').style.display = 'none';
    document.getElementById('thankYouContainer').style.display = 'block';
});

document.getElementById('visitWebsiteButton').addEventListener('click', function() {
    window.open('https://juancego.github.io/sierrapage/#', '_blank'); // Reemplaza con la URL de tu página web
});
