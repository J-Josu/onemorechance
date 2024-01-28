export const ROOM_STATUS = {
    LOBBY: 'LOBBY',
    PLAYING: 'PLAYING',
    CLOSED: 'CLOSED',
} as const;

export type RoomStatus = typeof ROOM_STATUS[keyof typeof ROOM_STATUS];

export const GAME_STATUS = {
    NOT_STARTED: 'NOT_STARTED',
    PRE_ROUND: 'PRE_ROUND',
    CHOOSING_OPTION: 'CHOOSING_OPTION',
    RATING_PLAYS: 'RATING_PLAYS',
    ROUND_WINNER: 'ROUND_WINNER',
    OPTION_REFILL: 'OPTION_REFILL',
    SCOREBOARD: 'SCOREBOARD',
    FINISHED: 'FINISHED',
} as const;

export type GameStatus = typeof GAME_STATUS[keyof typeof GAME_STATUS];

export const PLAYER_RATING = {
    GOOD: 'GOOD',
    MEH: 'MEH',
    BAD: 'BAD',
} as const;

export type PlayerRating = typeof PLAYER_RATING[keyof typeof PLAYER_RATING];

export const DECK_TYPE = {
    CHOOSE: 'CHOOSE',
    COMPLETE: 'COMPLETE',
} as const;

export type DeckType = typeof DECK_TYPE[keyof typeof DECK_TYPE];
