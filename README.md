# show-emote

Simple !tts <text> command for Twitch and Kick.  

### Config

```
https://tts.igor.ovh/?channel=igor_ovh
    &service=twitch
    &voice=Brian
    &volume=1.0
    &allowList=igor_ovh,igor
```

- `channel` - channel to which bot will connect (**just your channel name**),
- `service` - service which script will be using (`twitch` or `kick`),
- `voice` - voice that script will be using (list of voices is [here](https://lazypy.ro/tts/?voice=Brian&service=StreamElements&text=Lorem%20Ipsum&lang=English&g=A), click Languages),
- `volume` - volume of text to speech audio,
- `allowList` - list of users (seperated by `,`), which will be allowed to use command without being moderator (**moderator usernames do not have to be here, they will can use these commands anyway, this is like extra users list**),

You don't have to use every parameter, values shown above are deafult and if you dont use some paramater the default value will be used.  
So the URL can be even this: `https://tts.igor.ovh/?channel=igor_ovh&voice=Szabolcs`

### Commands
Only moderator can use these commands.

- `!tts <text>` - text to speech.

### StreamElements Overlay
Script for **StreamElements Overlay** is in [streamelements/overlay.js](streamelements/overlay.js).