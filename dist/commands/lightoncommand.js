"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LightOnCommand {
    light;
    nameCommand = '1';
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOn();
    }
}
exports.default = LightOnCommand;
