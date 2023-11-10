import { shuffle } from "../setup/shuffle.js";
import { addCard } from "./add-card.js";
import { deck, deck_html, deckDisplay_html, hand, hand_html, lostzone, lostzone_html, discard, discard_html, stadium, stadium_html, prizes, 
prizes_html, active, active_html, bench, bench_html, cardData, prizesHidden_html, lostzoneDisplay_html, discardDisplay_html } from "../setup/initialization.js"
import { dragOver, drop, dragStart, dragEnd } from "../image-logic/drag.js";
import { removeImages } from "../image-logic/remove-images.js";
import { moveCard } from "../image-logic/move-card.js";
import { socket } from "../front-end.js";
import { buildImage } from "../setup/build-image.js";

// Draw starting hand of 7
export function drawHand(){

    // Reset all initialized parameters
    const cardContainers = [deck, lostzone, discard, stadium, prizes, active, bench, hand];

    for (const container of cardContainers) {
        container.cards = [];
        container.images = [];
    };
    
    [deckDisplay_html, deck_html, lostzone_html, discard_html, stadium_html, prizes_html, active_html, bench_html, hand_html, prizesHidden_html, lostzoneDisplay_html, discardDisplay_html].forEach((container) => {
        removeImages(container);
    });

    // Add the cards to the deck array

    // Loop through the card data and call addCard for each entry.
    for (const [quantity, name, imageUrl, type] of cardData) {
        for (let i = 0; i < quantity; i++) {
            addCard(1, name, imageUrl, type);
        };
    };

    // Check if the total quantity is 60
    if (deck.count !== 60) {
        const errormsg = `Total quantity should be 60. The current quantity is ${totalQuantity}.`;
        console.error(errormsg);
        deckDisplay_html.textContent = errormsg;
    } 
    // If deck is legal, proceed
    else {
        shuffle(deck.cards, deck.images);
        // Append the <img> element to the deck display modal
        const coverImage = document.createElement('img');

        // define attributes of deck image
        const mainImageAttributes = {
            src: 'resources/card-scans/cardback.png',
            alt: 'Deck Cover',
            id: 'deckCover',
            // Event listener for drag-and-drop
            dragover: dragOver,
            drop: drop,
            // Function to open the modal when clicked
            click: () => {
              deck_html.style.display = 'block';
            },
            // Make the image draggable
            draggable: true,
            // Event listeners for drag-and-drop functionality
            dragstart: dragStart,
            dragend: dragEnd
        };
          
        // Set image attributes and event listeners and append to deckDisplay container
        buildImage(mainImageAttributes, coverImage);
        deckDisplay_html.appendChild(coverImage);

        //send to back-end
        const oppImageAttributes = {
            src: 'resources/card-scans/cardback.png',
            alt: 'Deck Cover',
            id: 'deckCover'
        };
        socket.emit('appendImage', oppImageAttributes, 'deckDisplay_html');


        for (let i = 0; i < deck.count; i++){
            deck_html.appendChild(deck.images[i]);
        };
        
        // Populate hand array with first 7 values of Deck (and removing cards from deck)

        for (let i = 0; i < 7; i++){
            moveCard(deck, deck_html, hand, hand_html, i);
        };

        // Populate prize array with first 6 values of Deck
        
        for (let i = 0; i < 6; i++){
            moveCard(deck, deck_html, prizes, prizes_html, i);
        };
    };
}