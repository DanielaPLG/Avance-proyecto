document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const query = event.target.search.value; // Obtener el valor de búsqueda
    console.log('Buscando:', query);
});

