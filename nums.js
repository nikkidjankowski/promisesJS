let url = "http://numbersapi.com";
let fav = 7;


$.getJSON(`${url}/${fav}?json`).then(data => {
    console.log(data);
  });

let favs = [7, 23, 28];

$.getJSON(`${url}/${favs}?json`).then(data => {
    console.log(data);
});


Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${url}/${fav}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
})