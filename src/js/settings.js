const Settings = {
	channel: 'igor_ovh',
	service: 'twitch',
	allowList: [],
	voice: 'Brian',
	volume: 1.0,
};

console.info('[Config] Loading...');

const params = new URL(document.location).searchParams;
if (params.has('channel')) Settings.channel = params.get('channel');
if (params.has('service')) Settings.service = params.get('service');
if (params.has('voice')) Settings.voice = params.get('voice');
if (params.has('volume')) Settings.volume = parseFloat(params.get('volume'));
if (params.has('allowList')) Settings.allowList = params.get('allowList').split(',');
console.info('[Config] Parsed:', Settings);

export default Settings;
