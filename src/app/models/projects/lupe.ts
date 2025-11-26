import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project, ProjectDetails} from '../project';

const projectLupe = new Project(
  'lupe',
  'Lupe',
  'assets/images/projects/lupe/lupe1.png',
  [Technologies.Unity, Technologies.CSharp],
  [
    new ProjectMedia('/assets/images/projects/lupe/lupe2.gif', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/lupe/lupe3.gif', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/lupe/lupe4.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/lupe/lupe5.png', ProjectMediaType.IMAGE),
  ], [
    'Lupe was made in 72 hours for the Ludum Dare game jam. Blast your way to the finish line as Loopey, a cube competing in a race ' +
    'designed for spheres. Pick up power-ups that will help you finish first and show those spheres that they aren’t as fast as they think',
    'Loopey moves by creating an explosion in one of its two exploding corners (lower left and upper right corners)',
    'The game was developed by five people including me. One music composer, one artists and three programmers'
  ], {
    startDate: new Date(2020, 9, 2),
    finishDate: new Date(2020, 9, 5),
    timeItTook: {years: 0, months: 0, days: 3}
  },
  [
    {name: 'Game', link: 'https://nachodlv.github.io/ludum-dare-47/'},
    {name: 'Source code', link: 'https://github.com/Nachodlv/ludum-dare-47'},
    {name: 'Ludum Dare submission', link: 'https://ldjam.com/events/ludum-dare/47/lupe'}
  ],
  [
    ProjectDetails.ConstructLearningDetails(
      [
        'Learned how to prototype challenging AIs',
        'Learned how to manage a team',
      ]
    )
  ]);

export {projectLupe};
