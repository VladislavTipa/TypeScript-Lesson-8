import { ICommand } from '../typings';
import Light from '../structures/light';

export default class LightOnCommand implements ICommand {
  public buttonId = '1';

  public constructor(private light: Light) {}

  execute(): void {
    this.light.turnOn();
  }
}