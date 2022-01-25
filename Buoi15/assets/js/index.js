const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const usersElement = document.querySelector('.users');

usersElement.innerHTML = "";
let htmlData = "";
if (params.id) {
    for (const item of users) {

        if (item.id == params.id) {
            let html = `
            <div class="user">
                <img src="${item.img}" alt="">
                <h4>${item.name}</h4>
                <h4>${item.birthday}</h4>
            </div>`;
            htmlData += html;
        }

    }
} else {

    for (const item of users) {
        if (item.lanes.includes(params.lane)) {
            let html = `
            <div class="user">
            <img src="${item.img}" height="50" alt="">
                <h4>${item.name}</h4>
                <h4>${item.birthday}</h4>
                <a href="index.html?id=${item.id}">Xem chi tiết</a>
            </div>`;
            htmlData += html;
        }
    }
}
usersElement.innerHTML = htmlData;