const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an e-mail address!");
    } else {
        email.setCustomValidity("");
    }
});

async function postData(url = '', data = {}) {

  const response = await fetch(url, {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data)
  });
  return response.json();
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data);
  });