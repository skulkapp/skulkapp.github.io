// Function to fetch crypto rates from your server
async function fetchCryptoRates() {
    const endpoint = '/cryptoRates';  // Now you fetch from your server, not Alpha Vantage directly
    
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        
        const btcRate = data['Time Series (Digital Currency Daily)']['1. open (USD)'];
        document.getElementById('ratesList').innerHTML = `<li>Bitcoin (BTC): $${btcRate}</li>`;
    } catch (error) {
        console.error("Error fetching crypto rates:", error);
    }
}

fetchCryptoRates();
