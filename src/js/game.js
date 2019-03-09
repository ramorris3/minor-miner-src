// MAIN GAME ENTRY POINT //
var MinerGame = MinerGame || {};

// site-lock
var allowedHosts = [
    // 'localhost:3000',
    'www.coolmath-games.com',
    'edit.coolmath-games.com',
    'www.stage.coolmath-games.com',
    'edit-stage.coolmath-games.com',
    'dev.coolmath-games.com',
    'm.coolmath-games.com',
    'www.coolmathgames.com',
    'edit.coolmathgames.com',
    'www.stage.coolmathgames.com',
    'edit-stage.coolmathgames.com',
    'dev.coolmathgames.com',
    'm.coolmathgames.com'
];

if (allowedHosts.indexOf(window.location.host) !== -1) {
    // game def
    MinerGame.game = new Phaser.Game(640, 480, Phaser.AUTO, '', null, false, false);

    // game states
    MinerGame.game.state.add('boot', MinerGame.bootState);
    MinerGame.game.state.add('preload', MinerGame.preloadState);
    MinerGame.game.state.add('splash', MinerGame.splashState);
    MinerGame.game.state.add('menu', MinerGame.menuState);
    MinerGame.game.state.add('play', MinerGame.playState);
    MinerGame.game.state.add('thanks', MinerGame.thanksState);
    MinerGame.game.state.add('victory', MinerGame.victoryState);
    MinerGame.game.state.add('continue', MinerGame.continueState);
    MinerGame.game.state.add('upgrade', MinerGame.upgradeState);
    MinerGame.game.state.add('finale', MinerGame.finaleState);

    // run game
    MinerGame.game.state.start('boot');
}

