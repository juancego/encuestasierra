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

    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'Gracias por completar la encuesta. ¡Tus respuestas han sido enviadas!';

    // Limpiar el formulario
    document.getElementById('surveyForm').reset();
});
