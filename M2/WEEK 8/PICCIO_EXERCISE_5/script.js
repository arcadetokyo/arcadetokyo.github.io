const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyQuoteBtn = document.getElementById('copyQuoteBtn');
const tweetQuoteBtn = document.getElementById('tweetQuoteBtn');

function fetchQuote() {
    quoteElement.textContent = 'Loading quote...';
    authorElement.textContent = '';

    fetch('https://dummyjson.com/quotes')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            const randomQuote = data.quotes[randomIndex];

            quoteElement.textContent = `"${randomQuote.quote}"`;
            authorElement.textContent = `- ${randomQuote.author}`;

            const tweetText = encodeURIComponent(`"${randomQuote.quote}" - ${randomQuote.author}`);
            tweetQuoteBtn.href = `https://twitter.com/intent/tweet?text=${tweetText}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to load quote. Please try again.';
            authorElement.textContent = '';
        });
}

function copyToClipboard() {
    const quoteText = `${quoteElement.textContent} ${authorElement.textContent}`;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert('Quote copied to clipboard!');
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}

newQuoteBtn.addEventListener('click', fetchQuote);
copyQuoteBtn.addEventListener('click', copyToClipboard);

fetchQuote();
