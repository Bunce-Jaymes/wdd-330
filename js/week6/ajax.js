const headers = new Headers({
    'Content-Type': 'text/plain',
    'Accept-Charset': 'utf-8',
    'Accept-Encoding': 'gzip,deflate'
});

console.log(headers.has('Content-Type'));
console.log(headers.get('Content-Type'));
headers.set('Content-Type', 'application/json');
console.log(headers.get('Content-Type'));
headers.append('Accept-Encoding', 'gzip,deflate');
headers.delete('Accept-Encoding');
console.log(headers);

const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

textButton.addEventListener('click', () => {
    fetch(textURL)
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.text())
        .then(text => outputDiv.innerText = text)
        .catch(error => console.log('There was an error:', error))
}, false);

apiButton.addEventListener('click', () => {
    fetch(apiURL)
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.json())
        .then(data => outputDiv.innerText = data.value)
        .catch(error => console.log('There was an error:', error))
}, false);
