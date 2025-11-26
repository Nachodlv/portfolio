import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project, ProjectDetails} from '../project';

const projectRobophaser = new Project(
  'robophaser',
  'RoboPhaser AR - Thesis',
  'assets/images/projects/robophaser/robophaser-logo.png',
  [Technologies.Unity, Technologies.CSharp],
  [
    new ProjectMedia('https://www.youtube.com/embed/PLQuki4Ugbg', ProjectMediaType.VIDEO),
    new ProjectMedia('https://www.youtube.com/embed/gZkIHGXlDm8', ProjectMediaType.VIDEO, 'Procedural generation'),
    new ProjectMedia('assets/images/projects/robophaser/wfc-output-obstacles.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/robophaser/home-screen.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/robophaser/waiting-screen.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/robophaser/positioning-game-area.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/robophaser/combat.png', ProjectMediaType.IMAGE),
  ], [
    'Multiplayer mobile experience where two players need to fight each other in a reality augmented world. The players are represented ' +
    'as space ships and need to shoot each other while using the covers placed in the real world. The map is created using a procedural ' +
    'generation algorithm called Wave Function Collapse.',
    'This project is my thesis for the Austral University. Down below I attached the thesis in spanish.'
  ], {
    startDate: new Date(2020, 5, 1),
    finishDate: new Date(2021, 0, 10),
    timeItTook: {years: 0, months: 8, weeks: 0, days: 0}
  },
  [
    {name: 'Thesis (In spanish)', link: 'https://drive.google.com/file/d/15o5B3Il1ZMlf6qBtQkKkyX6ovAHNpZzB/view?usp=sharing'},
    {name: 'Code', link: 'https://github.com/Nachodlv/robophaser-thesis'},
  ],
  [
    ProjectDetails.ConstructLearningDetails(
      [
        'Use augmented reality in Unity',
        'Replicate augmented reality anchors (data) to multiple users',
        'The procedural generation algorithm Wave Function Collapse',
        'Make fast pace multiplayer games',
        'Write documents using Latex'
      ]
    )
  ]);

export {projectRobophaser};
