import { POV, deck, oppDeck, oppViewCards, oppViewCards_html, p1, roomId, sCard, socket, viewCards, viewCards_html } from '../../front-end.js';
import { moveCard } from '../general/move-card.js';
import { hideCards, revealCards } from '../general/reveal-and-hide.js';
import { shuffleContainer } from './shuffle-container.js';

export const shuffleIntoDeck = () => {
    moveCard(sCard.user, sCard.locationAsString, sCard.containerId, 'deck', 'deck_html', sCard.index);    
    shuffleContainer(sCard.user, 'deck', 'deck_html');
}

export const moveToDeckTop = () => {
    moveCard(sCard.user, sCard.locationAsString, sCard.containerId, 'deck', 'deck_html', sCard.index);
    //since card is appended to bottom, move all existing cards in deck to the bottom afterwards
    const deckCount = sCard.user === 'self' ? deck.count : oppDeck.count;
    for (let i = 0; i < deckCount - 1; i++){
        moveCard(sCard.user, 'deck', 'deck_html', 'deck', 'deck_html', 0);
    };
}

export const moveToDeckBottom = () => {
    moveCard(sCard.user, sCard.locationAsString, sCard.containerId, 'deck', 'deck_html', sCard.index);
}

export const moveToBoard = () => {
    moveCard(sCard.user, sCard.locationAsString, sCard.containerId, 'board', 'board_html', sCard.index);
}

export const shuffleDeck = (user) => {
    shuffleContainer(user, 'deck', 'deck_html');
}

export const draw = (user) => {
    let drawAmount;

    const userInput = window.prompt('Draw how many cards?', '0');
    
    drawAmount = parseInt(userInput);

    const deckCount = user === 'self' ? deck.count : oppDeck.count;

    if (!isNaN(drawAmount) && drawAmount >= 0){
        drawAmount = Math.min(drawAmount, deckCount);
        for (let i = 0; i < drawAmount; i++){
            moveCard(user, 'deck', 'deck_html', 'hand', 'hand_html', 0);
        };
    } else {
        window.alert('Please enter a valid number for the draw amount.');
    };
}

export const handleViewButtonClick = (user, top) => {
    let viewAmount;
    const userInput = window.prompt('How many cards do you want to look at?', '1');
    viewAmount = parseInt(userInput);

    const deckCount = user === 'self' ? deck.count : oppDeck.count;
    const targetOpp = user === POV.oUser;

    if (!isNaN(viewAmount) && viewAmount >= 1){
        viewAmount = Math.min(viewAmount, deckCount);
        viewDeck(user, viewAmount, top, deckCount, targetOpp);
    } else {
        window.alert('Please enter a valid number for the view amount.');
    };
}

export const viewDeck = (user, viewAmount, top, deckCount, targetOpp, received = false) => {
    const _viewCards_html = user === 'self' ? viewCards_html : oppViewCards_html;
    _viewCards_html.style.display = 'block';

    if (top){
        for (let i = 0; i < viewAmount; i++){
            moveCard(user, 'deck', 'deck_html', 'viewCards', 'viewCards_html', 0, false, true);
        };
    } else {
        for (let i = deckCount - 1; i > deckCount - 1 - viewAmount; i--){
            moveCard(user, 'deck', 'deck_html', 'viewCards', 'viewCards_html', i, false, true);
        };
    };
    if (received && ((POV.user !== user && !targetOpp) || (POV.user === user && targetOpp))){
        hideCards(user, 'viewCards', 'viewCards_html');
    };
    if (!p1[0] && !received){
        const oUser = user === 'self' ? 'opp' : 'self';
        const data = {
            roomId : roomId,
            user: oUser,
            viewAmount: viewAmount,
            top: top,
            deckCount: deckCount,
            targetOpp: targetOpp,
            received : true
        };
        socket.emit('viewDeck', data);
    };
}




export const switchWithDeckTop = () => {
    moveToDeckTop();
    const deckCount = sCard.user === 'self' ? deck.count : oppDeck.count;
    if (deckCount > 1){
        moveCard(sCard.user, 'deck', 'deck_html', sCard.locationAsString, sCard.containerId, 1, false, true);
        socket.emit('moveCard', roomId, sCard.oUser, 'deck', 'deck_html', sCard.locationAsString, sCard.containerId, 0, false, true);
    };
}