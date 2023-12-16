import { deckDisplay_html, discardDisplay_html, lostzoneDisplay_html, sCard, selfContainers, selfContainersDocument, stadium_html, target, } from '../initialization/containers/self-containers.js';
import { containerIdToLocation } from '../setup/containers/container-reference.js';
import { deck_html, lostzone_html, discard_html } from '../initialization/containers/self-containers.js';
import { oppContainers, oppContainersDocument, oppDeck_html, oppDiscard_html, oppLostzone_html } from '../initialization/containers/opp-containers.js';
import { stringToVariable, variableToString } from '../setup/containers/string-to-variable.js';
import { closeFullView, closePopups, deselectCard } from '../actions/general/close-popups.js';
import { moveCard } from '../actions/general/move-card.js';
import { socket } from '../initialization/socket-port/socket.js';
import { cardContextMenu } from '../initialization/html-elements/context-menu.js';

export const identifyCard = (event) => {
    if (event.target.user === 'self'){
        sCard.oUser = 'opp';
        sCard.user = 'self';
    } else {
        sCard.oUser = 'self';
        sCard.user = 'opp';
    };

    sCard.containerId = event.target.parentElement.id;
    if (!sCard.containerId){
        sCard.containerId = event.target.parentElement.parentElement.id;
    };
    sCard.container = stringToVariable(sCard.user, sCard.containerId);
    sCard.location = containerIdToLocation(sCard.user, sCard.containerId);
    sCard.locationAsString = variableToString(sCard.user, sCard.location);
  
    if (sCard.containerId === 'deckDisplay_html'){
        sCard.index = 0;
    } else {
        sCard.index = sCard.location.cards.findIndex(card => card.image === event.target);
    };
}

export const deckCoverClick = (event) => {
    if (event.target.parentElement === deckDisplay_html){
        deck_html.style.display = 'block';
    } else
		oppDeck_html.style.display = 'block';
}

export const discardCoverClick = (event) => {
    if (event.target.parentElement === discardDisplay_html){
        discard_html.style.display = 'block';
    } else
        oppDiscard_html.style.display = 'block';
}

export const lostzoneCoverClick = (event) => {
  if (event.target.parentElement === lostzoneDisplay_html){
      lostzone_html.style.display = 'block';
  } else {
      oppLostzone_html.style.display = 'block';
  }
}

export const openCardContextMenu = (event) => {
    closeFullView(event);
    deselectCard();
    cardContextMenu.style.cssText = '';

    event.preventDefault();
    event.stopPropagation();

    identifyCard(event);

    const selfView = (selfContainersDocument.body.contains(event.target) && selfContainers.classList.contains('self')) || (!selfContainersDocument.body.contains(event.target) && !selfContainers.classList.contains('self'));
    const oppView = (!selfContainersDocument.body.contains(event.target) && selfContainers.classList.contains('self')) || (selfContainersDocument.body.contains(event.target) && !selfContainers.classList.contains('self'));
    
    const buttonConditions = {
        'damageCounterButton': [[selfView, 'active_html'], [oppView, 'active_html'], [selfView, 'bench_html'], [oppView, 'bench_html']],
        'specialConditionButton': [[selfView, 'active_html'], [oppView, 'active_html']],
        'shufflePrizesButton': [[selfView, 'prizes_html']],
        'revealPrizesButton': [[selfView, 'prizes_html']],
        'hidePrizesButton': [[selfView, 'prizes_html']],
        'revealOppHandButton': [[oppView, 'hand_html']],
        'hideOppHandButton': [[oppView, 'hand_html']],
        'shuffleDeckButton': [[selfView, 'deckDisplay_html'], [oppView, 'deckDisplay_html']],
        'drawButton': [[selfView, 'deckDisplay_html']],
        'viewTopButton': [[selfView, 'deckDisplay_html'], [oppView, 'deckDisplay_html']],
        'viewBottomButton': [[selfView, 'deckDisplay_html'], [oppView, 'deckDisplay_html']],
        'discardHandButton': [[selfView, 'hand_html']],
        'shuffleHandButton': [[selfView, 'hand_html']],
        'shuffleHandBottomButton': [[selfView, 'hand_html']],
        'prizesHeader': [[selfView, 'prizes_html'], [oppView, 'prizes_html']],
        'handHeader': [[selfView, 'hand_html'], [oppView, 'hand_html']],
        'deckHeader': [[selfView, 'deckDisplay_html'], [oppView, 'deckDisplay_html']],
    };
    
    for (const [buttonId, conditionsArray] of Object.entries(buttonConditions)){
        const button = document.getElementById(buttonId);
      
        // Check each condition array
        const shouldDisplay = conditionsArray.some(conditions => {
            const [userCondition, containerCondition] = conditions;
            return userCondition && containerCondition === sCard.containerId;
        });
      
        // Set display property based on conditions
        button.style.display = shouldDisplay ? 'block' : 'none';
    };

    const atLeastOneButtonVisible = Array.from(cardContextMenu.children)
    .some(button => button.style.display !== 'none');
    
    // Set the display property based on the visibility of buttons
    cardContextMenu.style.display = atLeastOneButtonVisible ? 'block' : 'none';

    // get the fucking position of this mf
    const targetRect = event.target.getBoundingClientRect();
    const offsetHeight = (event.target.user === 'self') ? oppContainers.offsetHeight : selfContainers.offsetHeight;
    if (document.body.contains(event.target)){
        cardContextMenu.style.left = `${targetRect.left + event.target.clientWidth}px`;
        cardContextMenu.style.top = `${targetRect.top}px`;
    } else if (selfView){
        if (event.target.parentElement.id === 'deckDisplay_html'){
            cardContextMenu.style.left = `${targetRect.left - cardContextMenu.clientWidth}px`;
            cardContextMenu.style.top = `${targetRect.top + offsetHeight}px`; 
        }
        else if (event.target.parentElement.id === 'hand_html'){
            cardContextMenu.style.left = `${targetRect.left}px`;
            cardContextMenu.style.top = `${targetRect.top + offsetHeight - cardContextMenu.offsetHeight}px`; 
        }
        else {
            cardContextMenu.style.left = `${targetRect.left + event.target.clientWidth}px`;
            cardContextMenu.style.top = `${targetRect.top + offsetHeight}px`; 
        };
    } else if (oppView){
        const adjustment = (document.body.offsetWidth - oppContainers.offsetWidth);
        if (event.target.parentElement.id === 'deckDisplay_html'){
            cardContextMenu.style.right = `${targetRect.left + adjustment - cardContextMenu.clientWidth}px`;
            cardContextMenu.style.bottom = `${targetRect.top + offsetHeight - cardContextMenu.offsetHeight + event.target.offsetHeight}px`;
        } else if (event.target.parentElement.id === 'prizes_html'){
            cardContextMenu.style.right = `${targetRect.left + adjustment + event.target.clientWidth}px`;
            cardContextMenu.style.bottom = `${targetRect.top + offsetHeight - cardContextMenu.offsetHeight + event.target.offsetHeight}px`;
        } else {
            cardContextMenu.style.right = `${targetRect.left + adjustment - cardContextMenu.clientWidth + event.target.clientWidth}px`;
            cardContextMenu.style.bottom = `${targetRect.top + offsetHeight - cardContextMenu.offsetHeight}px`;
        };
    };
}

export const imageClick = (event) => {
    event.stopPropagation();

    if (event.target.classList.contains('selectHighlight')){
        closePopups();
        target.containerId = event.target.parentElement.parentElement.id;
        target.location = containerIdToLocation(sCard.user, target.containerId);
        target.index = target.location.cards.findIndex(card => card.image === event.target);
        target.locationAsString = variableToString(sCard.user, target.location);

        moveCard(sCard.user, sCard.locationAsString, sCard.containerId, target.locationAsString, target.containerId, sCard.index, target.index, true);
    } else {
        closePopups(event); //need both because of highlights
        identifyCard(event);
        sCard.card.image.classList.add('highlight');
        sCard.selecting = true;
    };
}

export const doubleClick = (event) => {
    identifyCard(event);
    sCard.card.image.classList.remove('highlight');
    if (['bench_html', 'active_html'].includes(sCard.containerId) && !event.target.parentElement.classList.contains('fullView')){
        const images = event.target.parentElement.querySelectorAll('img');
        images.forEach((img) => {
            if (img.attached){
                img.style.position = 'static';
            };
        });
        event.target.parentElement.className = 'fullView';
        event.target.parentElement.style.zIndex = '2';
        event.target.parentElement.style.height = '70%';
        event.target.parentElement.style.width = '69%';

        if (event.target.damageCounter){
            event.target.damageCounter.style.display = 'none';
        };
        if (event.target.specialCondition){
            event.target.specialCondition.style.display = 'none';
        };
        sCard.container.style.zIndex = '2';
        stadium_html.style.zIndex = '-1';
    } else {
        let overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent

        // Create a new image element
        let display = document.createElement('img');
        display.src = event.target.src;
        display.alt = event.target.alt;
        display.style.position = 'absolute';
        display.style.top = '50%';
        display.style.left = '50%';
        display.style.transform = 'translate(-50%, -50%)'; // Center the image
        display.style.maxWidth = '90%'; // Keep the image within the viewport
        display.style.maxHeight = '90%';

        // Append the image to the overlay
        overlay.appendChild(display);

        // Append the overlay to the body
        document.body.appendChild(overlay);

        // Listen for click events on the overlay
        overlay.addEventListener('click', () => {
            // Remove the overlay from the body
            document.body.removeChild(overlay);
        });

    };
}