const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

// Fetching Student Info

const getStudentInfo = () => {
  // student info API endpoint
  const url = 'http://localhost:9000/students';

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(body => {
      body.forEach(info => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const img = document.createElement('img');
        img.src = info.img;

        const h1 = document.createElement('h1');
        h1.textContent = info.name;

        const p = document.createElement('p');
        p.textContent = info.desc;

        container.appendChild(card);
        card.appendChild(img);
        card.appendChild(h1);
        card.appendChild(p);
      });
    })
    .catch(err => err);
};

getStudentInfo();
