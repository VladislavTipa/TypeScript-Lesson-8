"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MusicPlayCommand {
    musicPlayer;
    buttonId = '3';
    constructor(musicPlayer) {
        this.musicPlayer = musicPlayer;
    }
    execute() {
        this.musicPlayer.play();
    }
}
exports.default = MusicPlayCommand;
