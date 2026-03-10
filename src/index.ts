import LightOnCommand from './commands/lightoncommand';
import LightOffCommand from './commands/ligthoffcommand';
import MusicPlayCommand from './commands/musicplaycommand';
import MusicStopCommand from './commands/musicstopcommand';
import RemoteControl from './structures/remotecontrol';
import Light from './structures/light';
import MusicPlayer from './structures/musicplayer';

const remoteControl = new RemoteControl();
const light = new Light();
const musicplayer = new MusicPlayer();

const commands = [
  new LightOnCommand(light),
  new LightOffCommand(light),
  new MusicPlayCommand(musicplayer),
  new MusicStopCommand(musicplayer),
];

remoteControl.pressButton('1');
