import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './game';

export const game = new Game();
game.start();