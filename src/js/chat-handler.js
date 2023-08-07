import Settings from './settings.js';
import { speak } from './tts.js';

const commands = [
	{
		names: ['tts'],
		moderator: true,
		executor: (data, args, ignoreCooldown = false) => {
			const content = args.join(' ');
			console.info(`[${Settings.voice}]: ${content}`);
			speak(content);
		},
	},
];

export const handleMessage = (message) => {
	if (!message.content.startsWith('!')) return;

	const args = message.content.slice(1).split(' ');
	const commandName = args.shift().toLowerCase();

	const data = {
		username: message.username,
		userId: message.userId,
		moderator: message.moderator || message.broadcaster,
	};

	const command = commands.find((command) => command.names.includes(commandName));
	if (!command) return;

	if (command.moderator && !data.moderator && !Settings.allowList.includes(data.username)) return;

	command.executor(data, args);
};
