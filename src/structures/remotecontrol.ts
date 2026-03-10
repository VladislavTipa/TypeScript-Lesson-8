import { ICommand } from '../typings';

export default class RemoteControl {
  private commands: Map<string, ICommand> = new Map();

  setCommand(command: ICommand) {
    this.commands.set(command.buttonId, command);
  }

  pressButton(buttonId: string) {
    const command = this.commands.get(buttonId);

    if (command) {
      command.execute();
    } else {
      console.log(`Нажал не ту кнопку!!!`);
    }
  }
}
