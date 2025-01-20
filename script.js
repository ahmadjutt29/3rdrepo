document.getElementById('generateFact').addEventListener('click', function() {
    fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
        headers: { 'X-Api-Key': 'YOUR_API_KEY' }
    })
    .then(response => response.json())
    .then(data => {
        const factElement = document.getElementById('fact');
        factElement.textContent = data[0].fact || 'Could not fetch a random fact.';
    })
    .catch(error => {
        console.error('Error fetching random fact:', error);
    });
});
