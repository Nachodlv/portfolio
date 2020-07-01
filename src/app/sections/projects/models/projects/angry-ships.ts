import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectAngryShips = new Project(
  'angry-ships',
  'Angry Ships Remastered',
  'assets/images/projects/angry-ships/angry-ships.png',
  [Technologies.Flutter, Technologies.Node, Technologies.Firebase],
  [
    new ProjectMedia('assets/images/projects/angry-ships/angry-ships6.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/angry-ships/angry-ships2.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/angry-ships/angry-ships3.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/angry-ships/angry-ships4.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/angry-ships/angry-ships5.png', ProjectMediaType.IMAGE),
  ], [
    'Multiplayer browser game where you need to place your boats strategically and sunk the enemy boats. It was inspired' +
    'by the board game Battleship.',
    'The player needs to place their boats in the board and then try to guess where his opponent placed theirs. Once ' +
    'all the boats from any of the players are sunken the game ends',
    'The game was made for a lecture from the Austral University. It uses websockets for the communication between the ' +
    'client and the server. The frontend was made with Flutter and the backend was made with Node ts.'
  ], {
    startDate: new Date(2020, 4, 7),
    finishDate: new Date(2020, 5, 24),
    timeItTook: {years: 0, months: 1, weeks: 2, days: 3}
  }, undefined,
  [
    'Learned how multiplayer games work and how to send data to a server via a websocket',
    'Learned how to make a web page with heavy user interaction using Flutter',
    'Leaned how to use Firebase for the login with Google'
  ], [
    {name: 'Game', link: 'http://angry-ships-remastered.ignaciodelavega.com/'},
    // {name: 'Code', link: 'https://github.com/nachodlv/bookie'},
  ]);

export {projectAngryShips};
