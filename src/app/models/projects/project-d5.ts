import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project, ProjectDetails, ProjectDetailsPositioning} from '../project';

const projectD5 = new Project(
  'project-d5',
  'Project D5',
  new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1ZakASkXGXqDBeEAmFDdi9_6eM-nuPkOC')),
  [Technologies.UnrealEngine, Technologies.Cpp],
  [
    new ProjectMedia( ProjectMedia.getGoogleDriveUrl('1xJd6xqcwgbnnl9yVA5VklFkOU-IrXlbT'), ProjectMediaType.IMAGE).setFullHeight(false),
    new ProjectMedia( ProjectMedia.getGoogleDriveUrl('1Lxjm2DiMTEIIvRBIjNSTPWGnlLAL85Kg'), ProjectMediaType.IMAGE),
    new ProjectMedia( ProjectMedia.getGoogleDriveUrl('1uKmllHMTP_OR8I1-FkZKkRLHVE03HwC5'), ProjectMediaType.IMAGE),
    new ProjectMedia( ProjectMedia.getGoogleDriveUrl('1ix8BByo41Q7nveK9XI7bUFiCUjlqFpPB'), ProjectMediaType.IMAGE),
    new ProjectMedia( ProjectMedia.getGoogleDriveUrl('1WDyVsEXIbSXcZzdcF0WSBjtFKO2Ws-4L'), ProjectMediaType.IMAGE),
    new ProjectMedia( ProjectMedia.getGoogleDriveUrl('1wWpv4o9ZmGBw62zMPjsx4W_WUrM2GReD'), ProjectMediaType.IMAGE),
  ], [
    'Project D5 is a slapstick party-platformer royale set in a weird and wonderful alien galaxy deep in the farthest ' +
    'reaches of space where you compete for fame and glory in the galaxy’s most popular gameshow!',
    'The project is still in development.'
  ], {
    startDate: new Date(2024, 6),
  },
  [
    {name: 'Steam', link: 'https://store.steampowered.com/app/3734070/Project_D5/'},
  ],
  [
    ProjectDetails.constructResponsibilitiesDetails(
      [
        'I\'m currently developing the bots that simulate players.'
      ]
    )
  ]).setFinished(false);

export {projectD5};
