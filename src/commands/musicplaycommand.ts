import { ICommand } from '../typings';
import MusicPlayer from '../structures/musicplayer';

export default class MusicPlayCommand implements ICommand {
  public buttonId = '3';

  public constructor(private musicPlayer: MusicPlayer) {}

  execute(): void {
    this.musicPlayer.play();
  }
}