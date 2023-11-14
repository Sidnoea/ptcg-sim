import {selectedCard, prizes_html, lostzone_html, discard_html, deck, prizes, discard, 
    lostzone, active, stadium, bench, hand, deck_html, deckDisplay_html } from "./initialization.js";
import { drawHand } from "../general-actions/draw-hand.js";
import { moveEventTarget } from "../image-logic/move-event-target.js";
import { triggerShufflePopup, shuffleContainer } from "../general-actions/shuffle-container.js";
import { pokestop } from "../card-logic/pokestop.js";
import { flowerSelecting } from "../card-logic/flower-selecting.js";
import { colresssExperiment } from "../card-logic/colress's-experiment.js";
import { triggerRevealAndHidePopup, revealCards, hideCards } from "../general-actions/reveal-and-hide-button.js"; 
import { mainContainersDocument } from "./initialization.js";

// Draw a Hand
export const drawHandButton = document.getElementById('drawHandButton');
drawHandButton.addEventListener('click', function(){drawHand('self')});

// Shuffle deck or prize cards
export const shuffleButton = document.getElementById('shuffleButton');
shuffleButton.addEventListener('click', triggerShufflePopup);

export const shuffleDeckButton = document.getElementById('shuffleDeckButton');
shuffleDeckButton.addEventListener('click', function(){shuffleContainer('self', 'deck')});

export const shufflePrizesButton = document.getElementById('shufflePrizesButton');
shufflePrizesButton.addEventListener('click', function(){shuffleContainer('self', 'prizes_html')});

// Discard selected card
export const discardCardButton = document.getElementById('discardCardButton');
discardCardButton.addEventListener('click', function(){moveEventTarget(selectedCard, discard)});

// Bench selected card
export const benchCardButton = document.getElementById('benchCardButton');
benchCardButton.addEventListener('click', function(){moveEventTarget(selectedCard, bench)});

// lostzone selected card
export const lostzoneCardButton = document.getElementById('lostzoneCardButton');
lostzoneCardButton.addEventListener('click', function(){moveEventTarget(selectedCard, lostzone)});

// stadium selected card
export const stadiumCardButton = document.getElementById('stadiumCardButton');
stadiumCardButton.addEventListener('click', function(){moveEventTarget(selectedCard, stadium)});

// prize selected card
export const prizesCardButton = document.getElementById('prizesCardButton');
prizesCardButton.addEventListener('click', function(){moveEventTarget(selectedCard, prizes)});

// hand selected card
export const handCardButton = document.getElementById('handCardButton');
handCardButton.addEventListener('click', function(){moveEventTarget(selectedCard, hand)});

// deck selected card
export const deckCardButton = document.getElementById('deckCardButton');
deckCardButton.addEventListener('click', function(){moveEventTarget(selectedCard, deck)});

// active selected card
export const activeCardButton = document.getElementById('activeCardButton');
activeCardButton.addEventListener('click', function(){moveEventTarget(selectedCard, active)});

// pokestop function
export const pokestopButton = document.getElementById('pokestopButton');
pokestopButton.addEventListener('click', pokestop);

// flowerSelecting function
export const flowerSelectingButton = document.getElementById('flowerSelectingButton');
flowerSelectingButton.addEventListener('click', flowerSelecting);

// colress Experiment function
export const colresssExperimentButton = document.getElementById('colresssExperimentButton');
colresssExperimentButton.addEventListener('click', colresssExperiment);
// Get the modal and image elements
export const closeDeckDisplayButton = mainContainersDocument.getElementById('closeDeckDisplayButton');

// Function to close the modal
closeDeckDisplayButton.addEventListener('click', () => {
    deck_html.style.display = 'none';
});

// Get the modal and image elements
export const closeLostzoneDisplayButton = mainContainersDocument.getElementById('closeLostzoneDisplayButton');

// Function to close the modal
closeLostzoneDisplayButton.addEventListener('click', () => {
    lostzone_html.style.display = 'none';
});

// Get the modal and image elements
export const closeDiscardDisplayButton = mainContainersDocument.getElementById('closeDiscardDisplayButton');

// Function to close the modal
closeDiscardDisplayButton.addEventListener('click', () => {
    discard_html.style.display = 'none';
});

export const revealAndHideButton = document.getElementById('revealAndHideButton');
revealAndHideButton.addEventListener('click', triggerRevealAndHidePopup);

// Reveal prizes
export const revealPrizesButton = document.getElementById('revealPrizesButton');
revealPrizesButton.addEventListener('click', function(){revealCards(prizes, prizes_html)});

// Hide prizes
export const hidePrizesButton = document.getElementById('hidePrizesButton');
hidePrizesButton.addEventListener('click', function(){hideCards(prizes, prizes_html)});