"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LightOffCommand {
    light;
    nameCommand = '2';
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOff();
    }
}
exports.default = LightOffCommand;
