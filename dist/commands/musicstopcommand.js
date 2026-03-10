"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MusicStopCommand {
    musicPlayer;
    buttonId = '4';
    constructor(musicPlayer) {
        this.musicPlayer = musicPlayer;
    }
    execute() {
        this.musicPlayer.stop();
    }
}
exports.default = MusicStopCommand;
