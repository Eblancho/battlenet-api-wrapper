# Battle.net API Wrapper

[![Greenkeeper badge](https://badges.greenkeeper.io/QuadDamn/battlenet-api-wrapper.svg)](https://greenkeeper.io/)

**FORKED FROM https://github.com/QuadDamn/battlenet-api-wrapper**
The original code is not fully compatible with the new battle.net API, especially the WoW detail API (tbh, it's the only one I care about and maintain), that's why I'm adapting it because I need a wrapper and if I can't start empty, it's perfect !

**WARNING : ONLY WOW RETAIL IS FULLY COMPATIBLE CUZ THE NEW VERSION OF BNET API**

**THE OTHER ENDPOINT MAYBE COMPATIBLE BUT NOT TESTED YET**

A promised-based Node.js wrapper for the Battle.net Community and Data APIs (supports WoW, WoW Classic, SC2, D3, and Hearthstone).

## Installation

`$ npm install --save battlenet-api-wrapper-v2`

## Prerequisites / General Information

- To get your `Client ID` and `Client Secret` needed for this library, please refer to the steps in the [Battle.net API Getting Started documentation](https://develop.battle.net/documentation/guides/getting-started).
- Battle.net API Documentation Reference: https://develop.battle.net/documentation

## Usage

The basic implementation of this library is as follows:

```
const battleNetWrapper = require('battlenet-api-wrapper');  
  
const clientId = 'YOUR_CLIENT_ID';  
const clientSecret = 'YOUR_CLIENT_SECRET';  
  
(async function() {  
   const bnw = new battleNetWrapper();  
   await bnw.init(clientId, clientSecret);
}());  
```

Once you have the `battleNetWrapper` class object instantiated, you then have access to all of the classes
that exist under that umbrella.  For each of the classes below, you will see a link to the full abstraction
documentation.  Each of functions are available on the respective class objects.

- `bnw.Diablo3Community` [Usage Documentation](https://github.com/Eblancho/battlenet-api-wrapper/tree/master/src/d3#diablo-3-community)
- `bnw.Diablo3GameData` [Usage Documentation](https://github.com/Eblancho/battlenet-api-wrapper/tree/master/src/d3#diablo-3-game-data)
- `bnw.HearthstoneGameData` [Usage Documentation](https://github.com/Eblancho/battlenet-api-wrapper/tree/master/src/hearthstone#hearthstone-game-data)
- `bnw.Starcraft2Community` [Usage Documentation](https://github.com/Eblancho/battlenet-api-wrapper/tree/master/src/sc2#starcraft-2-community)
- `bnw.Starcraft2GameData` [Usage Documentation](https://github.com/Eblancho/battlenet-api-wrapper/tree/master/src/sc2#starcraft-2-game-data)
- `bnw.WowCommunity` [Usage Documentation](https://github.com/Eblancho/battlenet-api-wrapper/tree/master/src/wow#wow-community)
- `bnw.WowGameData` [Usage Documentation](https://github.com/Eblancho/battlenet-api-wrapper/tree/master/src/wow#wow-game-data)
- `bnw.WowProfileData` [Usage Documentation](https://github.com/Eblancho/battlenet-api-wrapper/tree/master/src/wow#wow-profile-data)
- `bnw.WowClassicGameData` [Usage Documentation](https://github.com/Eblancho/battlenet-api-wrapper/tree/master/src/wowClassic#wow-classic-game-data)

## Having issues or have questions?

[Post an issue](https://github.com/Eblancho/battlenet-api-wrapper/issues) and it will be responded to ASAP!

## Want to contribute?

Feel free!  [Create a Pull Request](https://github.com/Eblancho/battlenet-api-wrapper/pulls) and I'll review it ASAP!

## License

Battle.net API Wrapper is released under the  [MIT License](https://opensource.org/licenses/MIT).
