import { ICommand } from '../typings';
import Light from '../structures/light';

export default class LightOffCommand implements ICommand {
  public nameCommand = '2';

  public constructor(private light: Light) {}

  execute(): void {
    this.light.turnOff();
  }
}
