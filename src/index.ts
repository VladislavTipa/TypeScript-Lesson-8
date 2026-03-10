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

for (const command of commands) {
  remoteControl.setCommand(command);
}
remoteControl.pressButton('1');
remoteControl.pressButton('2');
remoteControl.pressButton('3');
remoteControl.pressButton('4');
remoteControl.pressButton('5');