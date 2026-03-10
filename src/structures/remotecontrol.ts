import { ICommand } from "../typings";

export default class RemoteControl {
  private commands: Map<string, ICommand> = new Map();

  setCommand(buttonId: string, command: ICommand) {
    
  }

  pressButton() {

  }
}