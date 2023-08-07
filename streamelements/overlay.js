const SETTINGS = {
	voice: 'Brian', // All voices are here (click Language): https://lazypy.ro/tts/?voice=Brian&service=StreamElements&text=Lorem%20Ipsum&lang=English&g=A
	volume: 1.0,
	allowModerators: true, // Every moderator will have access to !tts command without being mentioned
	allowList: ['username 1', 'username 2'], // Users, that will have access even without being moderator. If you want allow list to be empty use this: []
};

window.addEventListener('onEventReceived', (object) => {
	const message = object.detail.event && object.detail.event.data;

	let canSpeak = false;
	const badges = message.tags.badges;

	if (badges.includes('broadcaster')) canSpeak = true;
	if (SETTINGS.allowModerators && badges.includes('moderator')) canSpeak = true;
	if (SETTINGS.allowList.includes(message.displayName.toLowerCase())) canSpeak = true;
	if (!canSpeak) return;

	let text = message.text;
	if (!text.startsWith('!tts')) return;
	text = text.substring(5);
	if (text.length < 1) return;

	speak(text);
});

const speak = (text) => {
	const audio = document.createElement('audio');
	audio.volume = SETTINGS.volume;

	const ttsAPI = new URL('https://api.streamelements.com/kappa/v2/speech');
	ttsAPI.searchParams.append('voice', SETTINGS.voice);
	ttsAPI.searchParams.append('text', text);

	audio.src = ttsAPI;
	document.body.appendChild(audio);
	audio.play();

	audio.addEventListener('ended', () => {
		audio.remove();
	});
};
