import * as _ from 'lodash';


const players: Player[] = [
    {name: 'Mike', status: [], square: 0},
    {name: 'Boyden', status: [], square: 0},
]

const gameState: GameState = {
    players: players,
    currentPlayer: 0,
    whatHappened: [],
}


function getGameSquares(): GameSquare[] {
    return [
        {id: 0, description: 'Pallet Town'},
        {id: 1, description: 'Rattata', effect: rattata},
        {id: 2, description: 'Pidgey', effect: pidgey},
        {id: 3, description: 'Caterpie', effect: caterpie},
        {id: 4, description: 'Pikachu', effect: }
    ]
}

const rattata = (state: GameState): GameState => {
    state.whatHappened.push({
        drink: {
            who: "you",
            count: "all",
        }
    });
    state.currentPlayer = whosNext(state);
    return state;
}

const pidgey = (state: GameState): GameState => {
    state.whatHappened.push(
        {
            drink: {
                who: "select",
                count: 1
            },
            status: 'extra-turn'
        });
    state.players[state.currentPlayer].status.push({ type: "extra-turn"});
    return state;
}

const caterpie = (state: GameState): GameState => {
// todo remove current player
    state.players = state.players.map(player => {
        player.status = [...player.status, {type: 'stringshot'}]

        return player;
    });

    return state;
}

const drink(count: number): (game: GameState) => GameState {
    return (gameState: GameState) => {

    }
}

export function move(gameState: GameState, squaresMoved: number): GameState {
    gameState.whatHappened.push({
        space: squaresMoved,
        player: players[gameState.currentPlayer]
    });

    return gameState;
}

function whosNext(state: GameState): number {
    const max = state.players.length;
    let next = state.currentPlayer++;
    if (next > max) {
        next = 0;
    }
    return next;
}

function diceRoll(): number {
    return _.random(1, 6)
}
