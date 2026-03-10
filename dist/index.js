"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lightoncommand_1 = __importDefault(require("./commands/lightoncommand"));
const ligthoffcommand_1 = __importDefault(require("./commands/ligthoffcommand"));
const musicplaycommand_1 = __importDefault(require("./commands/musicplaycommand"));
const musicstopcommand_1 = __importDefault(require("./commands/musicstopcommand"));
const remotecontrol_1 = __importDefault(require("./structures/remotecontrol"));
const light_1 = __importDefault(require("./structures/light"));
const musicplayer_1 = __importDefault(require("./structures/musicplayer"));
const remoteControl = new remotecontrol_1.default();
const light = new light_1.default();
const musicplayer = new musicplayer_1.default();
const commands = [
    new lightoncommand_1.default(light),
    new ligthoffcommand_1.default(light),
    new musicplaycommand_1.default(musicplayer),
    new musicstopcommand_1.default(musicplayer),
];
for (const command of commands) {
    remoteControl.setCommand(command);
}
remoteControl.pressButton('1');
remoteControl.pressButton('2');
remoteControl.pressButton('3');
remoteControl.pressButton('4');
remoteControl.pressButton('5');
