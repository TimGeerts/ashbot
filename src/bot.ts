import * as Path from 'path';
import DiscordJS = require('discord.js');
import { Client, Discord, CommandMessage, CommandNotFound, Command, Description } from '@typeit/discord';

@Discord('!', {
  import: [Path.join(__dirname, 'modules', '*.ts')],
})
abstract class AshBot {
  // !help command lists out all available commands
  @Command('help')
  @Description('List all available commands')
  private help(command: CommandMessage) {
    const cmds = Client.getCommands();
    const embed = new DiscordJS.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Welcome to AshBot')
      .setDescription('The following commands are available: ');
    cmds
      .filter((c) => c.commandName !== 'help')
      .forEach((c) => {
        embed.addField(`${c.prefix}${c.commandName}`, c.description);
      });
    command.reply(embed);
  }
}
