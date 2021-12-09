const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const url = 'http://www.boredapi.com/api/activity/';
let activities;

async function getSomeActivity() {
    await fetch(url)
    .then(response => response.json())
    .then(data => {
        activities = data;
        console.log(activities);
    })
    .catch(err => console.log(err));

    output.innerHTML = `<p class="activity">${activities.activity}</p>
                        <small class="type">Type: ${activities.type}</p>`;
}

getSomeActivity();

btn.addEventListener('click', (event) => {
    event.preventDefault();
    getSomeActivity();
});