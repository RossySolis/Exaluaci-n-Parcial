function setLevel(level) {
    document.getElementById('selectedLevel').value = level;
    const txt = document.getElementById('recommendationText');
    if (!txt) return;

    const map = {
        pregrado: 'Te sugerimos carreras con enfoque práctico desde el inicio.',
        posgrado: 'Te sugerimos programas con líneas de investigación y proyectos reales.',
        certificacion: 'Te sugerimos certificaciones orientadas a competencias laborales.'
    };
    txt.textContent = map[level] || 'Recomendaciones se actualizarán al enviar.';
}

function goSolicitaInfo() {
    const level = document.getElementById('selectedLevel') ? .value || 'pregrado';
    const query = new URLSearchParams({ nivel: level }).toString();
    // Redirige al formulario con un parámetro (demo)
    window.location.href = './solicita-informacion.html?' + query;
}