import { hand_html, hand, discard, discard_html, prizes, prizes_html, lostzone, lostzone_html, 
    bench, bench_html, active, active_html, stadium, stadium_html, deck, deck_html, flowerSelectingZone, colresssExperimentZone } from "../setup/initialization.js";
import { moveCard } from "./move-card.js";

export function moveEventTarget(selectedCard, mLocation, targetImage){
    switch (selectedCard.location){
        case hand:
            switch (mLocation){
                case bench:
                    moveCard(hand, hand_html, bench, bench_html, selectedCard.index, targetImage);
                    break;
                case discard:
                    moveCard(hand, hand_html, discard, discard_html, selectedCard.index, targetImage);
                    break;
                case prizes:
                    moveCard(hand, hand_html, prizes, prizes_html, selectedCard.index, targetImage);
                    break;
                case lostzone:
                    moveCard(hand, hand_html, lostzone, lostzone_html, selectedCard.index, targetImage);
                    break;
                case active:
                    moveCard(hand, hand_html, active, active_html, selectedCard.index, targetImage);
                    break;
                case stadium:
                    moveCard(hand, hand_html, stadium, stadium_html, selectedCard.index, targetImage);
                    break;
                case deck:
                    moveCard(hand, hand_html, deck, deck_html, selectedCard.index, targetImage);
                    break;
                case hand:
                    moveCard(hand, hand_html, hand, hand_html, selectedCard.index, targetImage);
                    break;
            };
            break;
        case bench:
            switch (mLocation){
                case bench:
                    moveCard(bench, bench_html, bench, bench_html, selectedCard.index, targetImage);
                    break;
                case discard:
                    moveCard(bench, bench_html, discard, discard_html, selectedCard.index, targetImage);
                    break;
                case prizes:
                    moveCard(bench, bench_html, prizes, prizes_html, selectedCard.index, targetImage);
                    break;
                case lostzone:
                    moveCard(bench, bench_html, lostzone, lostzone_html, selectedCard.index, targetImage);
                    break;
                case active:
                    moveCard(bench, bench_html, active, active_html, selectedCard.index, targetImage);
                    break;
                case stadium:
                    moveCard(bench, bench_html, stadium, stadium_html, selectedCard.index, targetImage);
                    break;
                case deck:
                    moveCard(bench, bench_html, deck, deck_html, selectedCard.index, targetImage);
                    break;
                case hand:
                    moveCard(bench, bench_html, hand, hand_html, selectedCard.index, targetImage);
                    break;
            };
            break;
        case discard:
            switch (mLocation){
                case bench:
                    moveCard(discard, discard_html, bench, bench_html, selectedCard.index, targetImage);
                    break;
                case discard:
                    moveCard(discard, discard_html, discard, discard_html, selectedCard.index, targetImage);
                    break;
                case prizes:
                    moveCard(discard, discard_html, prizes, prizes_html, selectedCard.index, targetImage);
                    break;
                case lostzone:
                    moveCard(discard, discard_html, lostzone, lostzone_html, selectedCard.index, targetImage);
                    break;
                case active:
                    moveCard(discard, discard_html, active, active_html, selectedCard.index, targetImage);
                    break;
                case stadium:
                    moveCard(discard, discard_html, stadium, stadium_html, selectedCard.index, targetImage);
                    break;
                case deck:
                    moveCard(discard, discard_html, deck, deck_html, selectedCard.index, targetImage);
                    break;
                case hand:
                    moveCard(discard, discard_html, hand, hand_html, selectedCard.index, targetImage);
                    break;
            };
            break;
        case prizes:
            switch (mLocation){
                case bench:
                    moveCard(prizes, prizes_html, bench, bench_html, selectedCard.index, targetImage);
                    break;
                case discard:
                    moveCard(prizes, prizes_html, discard, discard_html, selectedCard.index, targetImage);
                    break;
                case prizes:
                    moveCard(prizes, prizes_html, prizes, prizes_html, selectedCard.index, targetImage);
                    break;
                case lostzone:
                    moveCard(prizes, prizes_html, lostzone, lostzone_html, selectedCard.index, targetImage);
                    break;
                case active:
                    moveCard(prizes, prizes_html, active, active_html, selectedCard.index, targetImage);
                    break;
                case stadium:
                    moveCard(prizes, prizes_html, stadium, stadium_html, selectedCard.index, targetImage);
                    break;
                case deck:
                    moveCard(prizes, prizes_html, deck, deck_html, selectedCard.index, targetImage);
                    break;
                case hand:
                    moveCard(prizes, prizes_html, hand, hand_html, selectedCard.index, targetImage);
                    break;
            };
            break;
        case lostzone:
            switch (mLocation){
                case bench:
                    moveCard(lostzone, lostzone_html, bench, bench_html, selectedCard.index, targetImage);
                    break;
                case discard:
                    moveCard(lostzone, lostzone_html, discard, discard_html, selectedCard.index, targetImage);
                    break;
                case prizes:
                    moveCard(lostzone, lostzone_html, prizes, prizes_html, selectedCard.index, targetImage);
                    break;
                case lostzone:
                    moveCard(lostzone, lostzone_html, lostzone, lostzone_html, selectedCard.index, targetImage);
                    break;
                case active:
                    moveCard(lostzone, lostzone_html, active, active_html, selectedCard.index, targetImage);
                    break;
                case stadium:
                    moveCard(lostzone, lostzone_html, stadium, stadium_html, selectedCard.index, targetImage);
                    break;
                case deck:
                    moveCard(lostzone, lostzone_html, deck, deck_html, selectedCard.index, targetImage);
                    break;
                case hand:
                    moveCard(lostzone, lostzone_html, hand, hand_html, selectedCard.index, targetImage);
                    break;
            };
            break;
        case active:
            switch (mLocation){
                case bench:
                    moveCard(active, active_html, bench, bench_html, selectedCard.index, targetImage);
                    break;
                case discard:
                    moveCard(active, active_html, discard, discard_html, selectedCard.index, targetImage);
                    break;
                case prizes:
                    moveCard(active, active_html, prizes, prizes_html, selectedCard.index, targetImage);
                    break;
                case lostzone:
                    moveCard(active, active_html, lostzone, lostzone_html, selectedCard.index, targetImage);
                    break;
                case active:
                    moveCard(active, active_html, active, active_html, selectedCard.index, targetImage);
                    break;
                case stadium:
                    moveCard(active, active_html, stadium, stadium_html, selectedCard.index, targetImage);
                    break;
                case deck:
                    moveCard(active, active_html, deck, deck_html, selectedCard.index, targetImage);
                    break;
                case hand:
                    moveCard(active, active_html, hand, hand_html, selectedCard.index, targetImage);
                    break;
            };
            break;
        case stadium:
            switch (mLocation){
                case bench:
                    moveCard(stadium, stadium_html, bench, bench_html, selectedCard.index, targetImage);
                    break;
                case discard:
                    moveCard(stadium, stadium_html, discard, discard_html, selectedCard.index, targetImage);
                    break;
                case prizes:
                    moveCard(stadium, stadium_html, prizes, prizes_html, selectedCard.index, targetImage);
                    break;
                case lostzone:
                    moveCard(stadium, stadium_html, lostzone, lostzone_html, selectedCard.index, targetImage);
                    break;
                case active:
                    moveCard(stadium, stadium_html, active, active_html, selectedCard.index, targetImage);
                    break;
                case stadium:
                    moveCard(stadium, stadium_html, stadium, stadium_html, selectedCard.index, targetImage);
                    break;
                case deck:
                    moveCard(stadium, stadium_html, deck, deck_html, selectedCard.index, targetImage);
                    break;
                case hand:
                    moveCard(stadium, stadium_html, hand, hand_html, selectedCard.index, targetImage);
                    break;
            };
            break;
        case deck:
            switch (mLocation){
                case bench:
                    moveCard(deck, deck_html, bench, bench_html, selectedCard.index, targetImage);
                    break;
                case discard:
                    moveCard(deck, deck_html, discard, discard_html, selectedCard.index, targetImage);
                    break;
                case prizes:
                    moveCard(deck, deck_html, prizes, prizes_html, selectedCard.index, targetImage);
                    break;
                case lostzone:
                    moveCard(deck, deck_html, lostzone, lostzone_html, selectedCard.index, targetImage);
                    break;
                case active:
                    moveCard(deck, deck_html, active, active_html, selectedCard.index, targetImage);
                    break;
                case stadium:
                    moveCard(deck, deck_html, stadium, stadium_html, selectedCard.index, targetImage);
                    break;
                case deck:
                    moveCard(deck, deck_html, deck, deck_html, selectedCard.index, targetImage);
                    break;
                case hand:
                    moveCard(deck, deck_html, hand, hand_html, selectedCard.index, targetImage);
                    break;
            };
            break;
        case hand:
            switch (mLocation){
                case bench:
                    moveCard(hand, hand_html, bench, bench_html, selectedCard.index, targetImage);
                    break;
                case discard:
                    moveCard(hand, hand_html, discard, discard_html, selectedCard.index, targetImage);
                    break;
                case prizes:
                    moveCard(hand, hand_html, prizes, prizes_html, selectedCard.index, targetImage);
                    break;
                case lostzone:
                    moveCard(hand, hand_html, lostzone, lostzone_html, selectedCard.index, targetImage);
                    break;
                case active:
                    moveCard(hand, hand_html, active, active_html, selectedCard.index, targetImage);
                    break;
                case stadium:
                    moveCard(hand, hand_html, stadium, stadium_html, selectedCard.index, targetImage);
                    break;
                case deck:
                    moveCard(hand, hand_html, deck, deck_html, selectedCard.index, targetImage);
                    break;
                case hand:
                    moveCard(hand, hand_html, hand, hand_html, selectedCard.index, targetImage);
                    break;
            };
            break;
        case flowerSelectingZone:
            switch (mLocation){
                case bench:
                    moveCard(flowerSelectingZone, flowerSelectingZone_html, bench, bench_html, selectedCard.index, targetImage);
                    break;
                case discard:
                    moveCard(flowerSelectingZone, flowerSelectingZone_html, discard, discard_html, selectedCard.index, targetImage);
                    break;
                case prizes:
                    moveCard(flowerSelectingZone, flowerSelectingZone_html, prizes, prizes_html, selectedCard.index, targetImage);
                    break;
                case lostzone:
                    moveCard(flowerSelectingZone, flowerSelectingZone_html, lostzone, lostzone_html, selectedCard.index, targetImage);
                    break;
                case active:
                    moveCard(flowerSelectingZone, flowerSelectingZone_html, active, active_html, selectedCard.index, targetImage);
                    break;
                case stadium:
                    moveCard(flowerSelectingZone, flowerSelectingZone_html, stadium, stadium_html, selectedCard.index, targetImage);
                    break;
                case deck:
                    moveCard(flowerSelectingZone, flowerSelectingZone_html, deck, deck_html, selectedCard.index, targetImage);
                    break;
                case hand:
                    moveCard(flowerSelectingZone, flowerSelectingZone_html, hand, hand_html, selectedCard.index, targetImage);
                    break;
            };
            break;
        case colresssExperimentZone:
            switch (mLocation){
                case bench:
                    moveCard(colresssExperimentZone, colresssExperimentZone_html, bench, bench_html, selectedCard.index, targetImage);
                    break;
                case discard:
                    moveCard(colresssExperimentZone, colresssExperimentZone_html, discard, discard_html, selectedCard.index, targetImage);
                    break;
                case prizes:
                    moveCard(colresssExperimentZone, colresssExperimentZone_html, prizes, prizes_html, selectedCard.index, targetImage);
                    break;
                case lostzone:
                    moveCard(colresssExperimentZone, colresssExperimentZone_html, lostzone, lostzone_html, selectedCard.index, targetImage);
                    break;
                case active:
                    moveCard(colresssExperimentZone, colresssExperimentZone_html, active, active_html, selectedCard.index, targetImage);
                    break;
                case stadium:
                    moveCard(colresssExperimentZone, colresssExperimentZone_html, stadium, stadium_html, selectedCard.index, targetImage);
                    break;
                case deck:
                    moveCard(colresssExperimentZone, colresssExperimentZone_html, deck, deck_html, selectedCard.index, targetImage);
                    break;
                case hand:
                    moveCard(colresssExperimentZone, colresssExperimentZone_html, hand, hand_html, selectedCard.index, targetImage);
                    break;
            };
            break;
    };
    if (selectedCard.container === lostzone_html || selectedCard.container === discard_html || selectedCard.container === deck_html){
        selectedCard.container.style.display = 'none';
    }
}