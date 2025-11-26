import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project, ProjectDetails} from '../project';

const projectStarShip = new Project(
  'starships',
  'Starships',
  'assets/images/projects/starships/starship2.png',
  [Technologies.Java],
  [
    new ProjectMedia('/assets/images/projects/starships/class-model.pdf', ProjectMediaType.PDF, 'Class model'),
    new ProjectMedia('/assets/images/projects/starships/starship1.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/starships/starship2.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/starships/starship3.png', ProjectMediaType.IMAGE),
  ], [
    '2D desktop game made with Java and without any engine. The architecture was made so the project can be escalated easily for example ' +
    'the number of players or the weapons.',
    'The game was made for the lecture of Software Design at Austral University.'
  ], {
    startDate: new Date(2018, 6),
    finishDate: new Date(2018, 10),
    timeItTook: {years: 0, months: 5}
  },
  [
    {name: 'Class diagram: ', link: 'https://drive.google.com/file/d/1o6BkwRPYDFfsyh4OKJWGH0IJ-pAGmrsP/view?usp=sharing'},
    {name: 'Code', link: 'https://github.com/nachodlv/starships'}
  ],
  [
    ProjectDetails.ConstructLearningDetails(
      [
        'Learned the design patterns in games.',
        'Learned how to make a game that can escalate and be expanded easily.'
      ]
    )
  ]);

export {projectStarShip};
