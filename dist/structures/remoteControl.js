"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoteControl {
    commands = new Map();
    setCommand(command) {
        this.commands.set(command.buttonId, command);
    }
    pressButton(buttonId) {
        const command = this.commands.get(buttonId);
        if (command) {
            command.execute();
        }
        else {
            console.log(`Нажал не ту кнопку!!!`);
        }
    }
}
exports.default = RemoteControl;
