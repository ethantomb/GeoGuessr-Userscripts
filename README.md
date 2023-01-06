# GeoGuessr Userscripts
This is a compilation of the various geoguessr.com userscripts that I wrote for fun*.
***
## Background
Geoguessr is a web-based game that challenges players to find their location on a map based on clues provided by Google Street View. Players are placed in a random location on the map and must use their geography and problem-solving skills to determine where they are. The game offers a number of different modes, including a classic mode where players must find their location within a certain distance and a competitive mode where players compete to guess the closest to a location as quickly. Geoguessr is a fun and educational way to test and improve your geography skills.
## Plonk Viewer
  ### Look at and learn from street view coverage where you guessed. [Find it on Greasy Fork](https://greasyfork.org/en/scripts/456785-plonkviewer-for-geoguessr "Plonk Viewer")
  #### The Problem: 
  When playing a game of GeoGuessr, players are shown the location on the map where they guessed (represented by an avatar) and the actual location (represented by a flag icon). When players click on the flag icon, they are taken to the Google Street View coverage of the actual location, but they are not able to view Street View coverage of the location where they guessed. This lack of visibility makes it difficult for players to understand where they went wrong and improve their performance in the game.
  
  Game Results Page:
  <img src = "https://raw.githubusercontent.com/ethantomb/GeoGuessr-Userscripts/main/Plonk%20Viewer/GameResults.png" height = "500">
  #### The Solution:
  My extension allows GeoGuessr players to view Google Street View coverage of the location where they "Plonked", in addition to the coverage of the actual location. This added visibility allows players to better understand where they went wrong in their guesses and improve their performance in the game. To use the extension, simply install [Tampermonkey(Chrome)](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en "Chrome Web Store") or [Greasemonkey (Firefox)](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/ "Firefox Browser Add-Ons"), download the script and follow the setup instructions from the link above. After you play a game, you will be able to click on your avatar and view Street View Coverage where you guessed.
  
## Better Leaderboard
  ### Elevate your GeoGuessr experience with the Better Leaderboard extension - search and browse the leaderboard with ease to track your progress and compete with friends. [Find it on the Chrome Web Store](https://chrome.google.com/webstore/detail/geoguessr-better-leaderbo/jfipnkcdgkdndjndmkkcbmnlminnlfbn "Chrome Web Store")
  #### The Problem:
  When browsing the leaderboard after playing a multiplayer challenge in GeoGuessr, the default options only allow users to view the next 26 players by clicking a single button. This makes it difficult for players to find specific users or view a larger range of records on the leaderboard.
  
  The only leaderboard browsing option:
  
  <img src = "https://raw.githubusercontent.com/ethantomb/GeoGuessr-Userscripts/main/Better%20Leaderboard/images/DefaultLB.png" height = "500">
  
  #### The Solution:
  This extension improves the leaderboard browsing experience in GeoGuessr by adding the ability to search for specific users by username and view any arbitrary range of records. This allows players to easily find and compare their rankings with friends or other players on the leaderboard. To use the extension, simply install it in your browser and play a multiplayer challenge as usual. After the challenge, the extension will automatically enhance the leaderboard browsing experience by adding the search and range selection features. With this extension, you'll be able to easily track your progress and compare your skills to others on the GeoGuessr leaderboard.
  
  Simplified with Better Leaderboard:
  
  <img src = "https://raw.githubusercontent.com/ethantomb/GeoGuessr-Userscripts/main/Better%20Leaderboard/images/betterlb.jpg" height = "500">
  
## Streak Counter(Forked): Settings Page
  ### User Experience Improvements for the GeoGuessr Country Streaks extension [Find it on GreasyFork](https://greasyfork.org/en/scripts/455958-geoguessr-country-streaks-settings-page "GreasyFork")
  Jupaoqq and other community developers created an extension that adds a country streak counter to the User Interface. The extension has many options that can be customized by modfying the script, including:
  * Add a bigdatacloud API key to automatically keep track of country streaks
  * Manually and Automatically save in-game locations to your own maps.
  
  <img src = "https://raw.githubusercontent.com/ethantomb/GeoGuessr-Userscripts/main/Country%20Streaks%20Settings%20Page/InGame.png" height = "500">
  
  Jupaoqq's streak counter is very useful, and it is widely used by the GeoGuessr community. However, having to manually make changes to the script can be daunting for the end user.
  In an effort to remedy this shortcoming and provide value to the community, I forked the script and added a pop-up settings page, which can be accessed by clicking on the streak counter icon.
  
  <img src = "https://raw.githubusercontent.com/ethantomb/GeoGuessr-Userscripts/main/Country%20Streaks%20Settings%20Page/SettingsPage.png" height = "500">

## Convenient Like Button
  #### The Problem:
  On GeoGuessr, players are able to like maps that they enjoy playing on so that they can easily find and play them later. However, the liked maps is hidden away in a difficult to find menu, like so:
  
   Step 1: 
   
   <img src = "https://raw.githubusercontent.com/ethantomb/GeoGuessr-Userscripts/main/Convenient%20Likes/OldLoc1.png" height = "500">
   
   Step 2:
   <img src = "https://raw.githubusercontent.com/ethantomb/GeoGuessr-Userscripts/main/Convenient%20Likes/OldLoc2.png" height = "500">
   
  #### The Solution:
  This simple adds a "View Liked Maps" button in a much more convenient way. Simply click the "Singleplayer" tab, and you will be presented with an option to view your liked maps.
  
  Simply Click The Singleplayer Tab:
  
  <img src = "https://raw.githubusercontent.com/ethantomb/GeoGuessr-Userscripts/main/Convenient%20Likes/NewLocBefore.png" height = "500">
  
  And see your liked maps:
  
  <img src = "https://raw.githubusercontent.com/ethantomb/GeoGuessr-Userscripts/main/Convenient%20Likes/NewLocAfter.png" height = "500">



*All of these scripts are published under my online pseudonym, Han75.
