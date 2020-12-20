interface GameState {
    players: Player[];
    currentPlayer: number;
    whatHappened: Event[
        //who drank
        //who moved
        //Applied effects
        //Dice rolled
        ]
    // gameHistory
}

interface Board {
    gameSquares: GameSquare[]
}

interface Player {
    name: string;
    status: StatusInstance[];
    square: number;

    // counterType? Give a selection of counters for people to choose from?
}

interface GameSquare {
    id: number;
    description: string;
    gym?: boolean;
    effect?: (state: GameState) => GameState;
}
type AmountDrunk = number | 'all';
type WhoDrinks = 'you' | 'select' | 'red' | 'blue' | 'everyone';

[{ who: 'you', count: 2 }]

interface Event {
    drink?: Drink,
    move?: Move    
    status?: StatusType
}

//type Event = StatusType | Drink | Move;

interface Drink {
    who: WhoDrinks;
    count: AmountDrunk;
}

interface Move {
    player: Player;
    space: number;
}

interface StatusInstance {
    type: StatusType;

    turnsLeft?: number;
    drinksPerTurn?: number;
}

type StatusType = 'stringshot' | 'stuck' | 'extra-turn'

type StatusEnd = 'turns' | 'position' | 'dynamic'
// Multi-round Status Effect
// String Shot (Half Speed for One Round)
// Stuck (1 or 2 keeps you Stuck)
// S.S. Anne (State needed here)
// Bike (Double Speed next turn)
// Sandshew (Non-dominant hand)
// Gym-skip
// Porygon (For every drink you are given, the giver must drink 3)
// Confused (roll a 1-3 to stop being confused or lose a turn)
// Defense Curl (Lose two turns, Do not drink until next turn)
// Magikarp (Gyarados defence)

// Catch the legendarys (Hwo to handle state )

// Pokemon-tower (No speaking)
// Safari Zone (buncha rules)



// One time effects
// Randomizer for Clefairy
// Extra Turn
// Haunter (move back 10 spaces)
// End of Pokemon tower Silph Co condition?


// Ones to replace?
// Channeler
// Slowpoke (Gesture? Webcam?)


// GET /gameState
// GET /roll

// POST /move
// - Roll a dice
// - call move(diceRoll)
//   - load game square based on current square ID + diceRoll
