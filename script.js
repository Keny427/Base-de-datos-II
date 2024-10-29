document.getElementById('moreInfoBtn').addEventListener('click', function() {
    const infoDiv = document.getElementById('moreInfo');
    infoDiv.classList.toggle('hidden');
    this.textContent = infoDiv.classList.contains('hidden') ? 'Más Información' : 'Ocultar Información';
});