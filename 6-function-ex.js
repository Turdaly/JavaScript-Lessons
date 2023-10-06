function findCard(cards, wantedCard = 'Туз') {
    console.log(`Ищем в колоде карту ` + wantedCard);

    let found = false
    
    for (card of cards) {
        if (card === wantedCard) {
            found = true;
            break;
        }
    }

    console.log(found ?
        `Мы нашли карту ${wantedCard}`:
        `В колоде нет карты ${wantedCard}`);
}



let myCards = ['Валет', 'Дамма', 'Король', 'Туз']

findCard(myCards);
findCard(myCards, 'Валет')