# Nekoparaiten

Nekoparaiten is an anime Neko romance simulation mobile game originally created by Sayori (NEKO WORKs) and developed by Yostar Games.

This is ONLY an April Fool's joke for my friend which includes a [website](https://nekoparaiten.github.io/) and a [game](https://github.com/DulapahV/Nekoparaiten).

This README is separated into the 5 parts:
 - [Download](#download)
 - [Running a Game](#running-a-game)
 - [Game Description](#game-description)
 - [Demo](#demo)
	 - [Main Menu](#main-menu)
	 - [Sync](#sync)
	 - [Story](#story)
	 - [Instruction](#instruction)
	 - [Countdown](#countdown)
	 - [Game](#game)
	 - [Finish](#finish)
	 - [Leaderboard](#leaderboard)
 - [Debug](#debug)
	 - [Changing Assets Folder Path](#changing-assets-folder-path)
	 - [Changing Countdown Timer](#changing-countdown-timer)
	 - [Changing Goal](#changing-goal)
	 - [Changing Amount Of Displayed Leaderboard](#changing-amount-of-displayed-leaderboard)

## Download
-   [release page](https://github.com/DulapahV/Nekoparaiten/releases)

## Running a Game
- Simply open `nekoparaiten.exe`, no need to install any library dependencies!
- Or compile `nekoparaiten.py` (the missing library dependencies will be automatically installed for you)

## Game Description
Nekoparaiten (April Fool's) is an online speed-clicking game written in Python. The goal is to click as fast as possible while also competing with other people around the world!

The key features are:
1. Featuring catgirl characters and voice lines from a famous franchise Nekopara!
2. Online account synchronization with built-in sign-up/login account feature
3. Online leaderboard system
4. Players can log in to view their profile stats and sync their progress anywhere/anytime in the world
5. Can also be played offline!

## Demo
### Main Menu
![Main Menu](https://github.com/DulapahV/Nekoparaiten/blob/main/images/mainmenu.png?raw=true)

### Sync
Here you can **Sign Up** or **Login** and then the player database will be stored in an online database.
![Sync](https://github.com/DulapahV/Nekoparaiten/blob/main/images/sync.png?raw=true)
Here player can also see how many times they have played the game.

The online database hierarchy is the following.

![database](https://github.com/DulapahV/Nekoparaiten/blob/main/images/db.png?raw=true)

### Story
Once you select `GAME START` at the [Main Menu](#main-menu), the game story will begin.
![story](https://github.com/DulapahV/Nekoparaiten/blob/main/images/story.png?raw=true)

### Instruction
![instruction](https://github.com/DulapahV/Nekoparaiten/blob/main/images/instruction.png?raw=true)

### Countdown
![countdown](https://github.com/DulapahV/Nekoparaiten/blob/main/images/countdown.png?raw=true)

### Game
![game](https://github.com/DulapahV/Nekoparaiten/blob/main/images/game.png?raw=true)

### Pause
When you pause, the timer stop and you will not be able to click. The timer will restart and you will able to click again after closing the dialog.
![pause](https://github.com/DulapahV/Nekoparaiten/blob/main/images/pause.png?raw=true)

### Finish
If you have not login, the finish screen will display `Login to save your progress!`.
![finish1](https://github.com/DulapahV/Nekoparaiten/blob/main/images/finish1.png?raw=true)

If you have login and made a new personal record, the finish screen will display `New Record!`.
![finish2new](https://github.com/DulapahV/Nekoparaiten/blob/main/images/finish2new.png?raw=true)

Otherwise, `Your progress has been saved!`
![finish2](https://github.com/DulapahV/Nekoparaiten/blob/main/images/finish2.png?raw=true)

### Leaderboard
![leaderboard](https://github.com/DulapahV/Nekoparaiten/blob/main/images/leaderboard.png?raw=true)
Players can also press the `refresh` button on the upper-right corner to refresh the leaderboard.

## Debug
You must sign out from your account first before doing these debugs as it will create unfairness between players.

### Changing Assets Folder Path
If you wish to move the `assets` folder to other location, change the following setting.
 1. Navigate to `//assets`
 2. Open `data.txt`
 3. Change `dataPath = assets` to `dataPath = [new location]`

### Changing Countdown Timer
If you wish to change the countdown timer from the default of `5` seconds, change the following setting.
 1. Navigate to `//assets`
 2. Open `data.txt`
 3. Change `countdownTimer = 5` to `countdownTimer = [integer]`

### Changing Goal
If you wish to change the goal of the game from 100 clicks, change the following setting.
 1. Navigate to `//assets`
 2. Open `data.txt`
 3. Change `targetScore = 100` to `targetScore = [integer]`

### Changing Amount Of Displayed Leaderboard
If you wish to change the amount of displayed leaderboard from the default of `10`, change the following setting.
 1. Navigate to `//assets`
 2. Open `data.txt`
 3. Change `scoreboardLimit = 10` to `scoreboardLimit = [integer]`