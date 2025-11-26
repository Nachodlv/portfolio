import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectStampede = new Project(
  'stamp-ede',
  'Stamp-ede',
  'https://img.itch.zone/aW1nLzEyMDQ0NjUzLmdpZg==/original/XEWO%2Bc.gif',
  [Technologies.Godot],
  [
    new ProjectMedia('https://img.itch.zone/aW1nLzEyMDQ0NjUzLmdpZg==/original/XEWO%2Bc.gif', ProjectMediaType.IMAGE),
    new ProjectMedia('https://img.itch.zone/aW1nLzEyMDQ0Njc3LnBuZw==/original/CDi%2Fv%2B.png', ProjectMediaType.IMAGE),
    new ProjectMedia('https://img.itch.zone/aW1nLzEyMDQ0NjY3LnBuZw==/original/ODqr4Z.png', ProjectMediaType.IMAGE),
  ], [
    'Your job is started to get heated as you get an ominous message as you are sorting through packages...',
    'Time is running out for you. You owe the mafia a lot of money, and you have just four days to pay them back. ' +
    'You will need to work as quickly and efficiently as possible at your job to make it up. ' +
    'You have four days to pay up and deal with your job and other eventualities that may come up',
    'Stamp-ede is a game made for the game jam Ludum Dare 53. It was made in the lapse of 5 days.'
  ], {
    startDate: new Date(2021, 3, 28),
    finishDate: new Date(2023, 4, 2),
    timeItTook: {years: 0, months: 0, weeks: 0, days: 5}
  },
  [
    {name: 'Game', link: 'https://nachodlv.itch.io/ludum-dare-53'},
    {name: 'Code', link: 'https://gitlab.com/nachodlv/ludum-dare-53'},
  ]);

export {projectStampede};
