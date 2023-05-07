
// api//
const aboutContent = document.querySelector('.about-content');

const aboutUs = function (location) {

    const request = new XMLHttpRequest();
    request.open('GET', `https://fakerapi.it/api/v1/companies?_quantity=1${location}`);
    request.send();

    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        console.log(data);

        const html = `
    <div class="about-us">
    <span><span>country: </span>${data.data[0].addresses[0].country}</span>
    <span><span>city: </span>${data.data[0].addresses[0].city}</span>
    <span><span>email: </span>${data.data[0].email}</span>
    <span><span>buildingNumber: </span>${data.data[0].addresses[0].buildingNumber}</span>
    </div>
    `;

        aboutContent.insertAdjacentHTML('beforeend', html);
        aboutContent.style.opacity = 1;
    });
};
aboutUs();

