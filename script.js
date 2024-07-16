document.getElementById('startSurveyButton').addEventListener('click', function() {
    document.getElementById('introContainer').style.display = 'none';
    document.getElementById('surveyContainer').style.display = 'block';
});

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const conductor = document.getElementById('conductor').value;
    const vehiculo = document.getElementById('vehiculo').value;
    const horarios = document.querySelector('input[name="horarios"]:checked').value;
    const normas = document.querySelector('input[name="normas"]:checked').value;
    const uniforme = document.querySelector('input[name="uniforme"]:checked').value;
    const aseo = document.querySelector('input[name="aseo"]:checked').value;
    const satisfaccion = document.querySelector('input[name="satisfaccion"]:checked').value;
    const comentarios = document.getElementById('comentarios').value;

    // Envío de datos a Google Apps Script
    const url = 'https://script.google.com/macros/s/AKfycbxBb36mWhTmh1ltt3UEwUqc8Crsp_VhjHp6lxRfaIanbwrnM9wLLcVLjCNv7LulspxAKQ/exec'; // Reemplaza con la URL de tu script web de Google Apps Script
    const data = {
        nombre: nombre,
        conductor: conductor,
        vehiculo: vehiculo,
        horarios: horarios,
        normas: normas,
        uniforme: uniforme,
        aseo: aseo,
        satisfaccion: satisfaccion,
        comentarios: comentarios
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Error en la solicitud.');
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);
        // Aquí podrías mostrar un mensaje de éxito o realizar otras acciones
        document.getElementById('surveyContainer').style.display = 'none';
        document.getElementById('thankYouContainer').style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        // Aquí podrías mostrar un mensaje de error si la solicitud falla
    });
});

document.getElementById('visitWebsiteButton').addEventListener('click', function() {
    // Redirigir al usuario a otra página web
    window.open('https://juancego.github.io/sierrapage/#', '_blank');
});

