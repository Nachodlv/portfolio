import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project, ProjectDetails} from '../project';

const projectForgeMadness = new Project(
  'forge-madness',
  'Forge Madness',
  'assets/images/projects/forge-madness/forge-madness-3.jpg',
  [Technologies.Godot],
  [
    new ProjectMedia('https://www.youtube.com/embed/3Cun19-Mtbs', ProjectMediaType.VIDEO),
    new ProjectMedia('assets/images/projects/forge-madness/forge-madness.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/forge-madness/forge-madness-2.png', ProjectMediaType.IMAGE),
  ], [
    'A 3D game made with Godot and WWise. Create different recipes on two sides by grabbing items from the ground or simply throwing ' +
    'them to the other side. if the object touches the ground it will change its color',
    'Made for the Global Game Jam 2022 with the theme \'Duality\' in three days.'
  ], {
    startDate: new Date(2022, 0, 28),
    finishDate: new Date(2022, 0, 30),
    timeItTook: {years: 0, months: 0, weeks: 0, days: 3}
  },
  [
    {name: 'Download Game', link: 'https://jarambarri.itch.io/forge-madness'},
    {name: 'Code', link: 'https://gitlab.com/nachodlv/ggj22'},
  ],
  [
    ProjectDetails.ConstructLearningDetails(
      [
        'Use the Godot engine',
        'Implement WWise in Godot',
        'Program in GodotScript',
      ]
    )
  ]);

export {projectForgeMadness};
