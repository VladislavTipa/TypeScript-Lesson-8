"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MusicStopCommand {
    musicPlayer;
    nameCommand = '4';
    constructor(musicPlayer) {
        this.musicPlayer = musicPlayer;
    }
    execute() {
        this.musicPlayer.stop();
    }
}
exports.default = MusicStopCommand;
