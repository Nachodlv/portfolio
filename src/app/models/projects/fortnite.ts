import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project, ProjectDetails} from '../project';

const projectFortnite = new Project(
  'fortnite',
  'Fortnite Creative',
  ProjectMedia.getGoogleDriveUrl('1E9xjlzcsqJoy1hPj8Ssv26AmEusOicrJ'),
  [Technologies.UnrealEngine, Technologies.Cpp],
  [
    new ProjectMedia( ProjectMedia.getGoogleDriveUrl('1rXKEgEbRSXyAxdynBe0ekeI37KmVCXfq'), ProjectMediaType.IMAGE),
    new ProjectMedia( ProjectMedia.getGoogleDriveUrl('1lc5DitodGBuzUKzLbI1uj3jCYTUg3p1w'), ProjectMediaType.IMAGE, 'Down but not out device'),
    new ProjectMedia( ProjectMedia.getGoogleDriveUrl('1ysQsHXM2u_quvYfQqErB9uyo6I4MIR6D'), ProjectMediaType.IMAGE, 'Health powerup'),
  ], [
    'Fortnite creative is a sandbox mode within Fortnite that allows players to design and build their owner islands, ' +
    'games and experiences. Players can use devices to modify the game rules',
    'While working at Nimble Giant Entertainment I helped Epic Games to implement new devices.'
  ], {
    startDate: new Date(2020, 11),
    finishDate: new Date(2021, 7),
  },
  [
    {name: 'Down but not out device', link: 'https://dev.epicgames.com/documentation/en-us/fortnite/using-down-but-not-out-devices-in-fortnite-creative'},
    {name: 'Health Powerup', link: 'https://dev.epicgames.com/documentation/en-us/fortnite/using-health-powerup-devices-in-fortnite-creative'}
  ],
  [
    ProjectDetails.constructResponsibilitiesDetails(
      [
        'Implemented the down but not down device',
        'Implemented the health powerup device',
        'Bug fixing around the creative game mode and other devices'
      ]
    )
  ]);

export {projectFortnite};
