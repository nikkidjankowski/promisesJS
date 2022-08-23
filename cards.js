

let url = "https://deckofcardsapi.com/api/deck";

$.getJSON(`${url}/new/draw/`).then(data => {
    let { suit, value } = data.cards[0];
    console.log(`${value} of ${suit}`);
  });



let first = null;
$.getJSON(`${url}/new/draw/`).then(data => {
    first = data.cards[0];
    let id = data.deck_id;
    return $.getJSON(`${url}/${id}/draw/`);
}).then(data => {
    let second = data.cards[0];
    [first, second].forEach(function(card){
        console.log(`${card.value} of ${card.suit}`);
    });
});


let id = null;
let $btn = $('button');
let $area = $('#area');

$.getJSON(`${url}/new/shuffle/`).then(data => {
    id = data.deck_id;
    $btn.show();
}); 
$btn.on('click', function() {
    $.getJSON(`${url}/${id}/draw/`).then(data => {
      let cardSrc = data.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 40 - 20;
      let randomY = Math.random() * 40 - 20;
      $area.append(
        $('<img>', {
          src: cardSrc,
          css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
          }
        })
      );
      if (data.remaining === 0) $btn.remove();
    });
  });

