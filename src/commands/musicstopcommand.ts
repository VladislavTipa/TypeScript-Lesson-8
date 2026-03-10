import { ICommand } from '../typings';
import MusicPlayer from '../structures/musicplayer';

export default class MusicStopCommand implements ICommand {
  public buttonId = '4';

  public constructor(private musicPlayer: MusicPlayer) {}

  execute(): void {
    this.musicPlayer.stop();
  }
}