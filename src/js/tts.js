import Settings from './settings.js';

export const speak = (text) => {
	const audio = document.createElement('audio');
	audio.volume = Settings.volume;

	const ttsAPI = new URL('https://api.streamelements.com/kappa/v2/speech');
	ttsAPI.searchParams.append('voice', Settings.voice);
	ttsAPI.searchParams.append('text', text);

	audio.src = ttsAPI;
	document.body.appendChild(audio);
	audio.play();

	audio.addEventListener('ended', () => {
		audio.remove();
	});
};
