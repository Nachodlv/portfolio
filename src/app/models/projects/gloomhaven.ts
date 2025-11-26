import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project, ProjectDetails} from '../project';

const projectGloomhaven = new Project(
  'gloomhaven',
  'Gloomhaven',
  'assets/images/projects/gloomhaven/gloomhaven2.png',
  [Technologies.Unity, Technologies.CSharp],
  [
    new ProjectMedia('https://www.youtube.com/embed/rvleMYstowo', ProjectMediaType.VIDEO),
    new ProjectMedia('/assets/images/projects/gloomhaven/gloomhaven.pdf', ProjectMediaType.PDF),
    new ProjectMedia('/assets/images/projects/gloomhaven/gloomhaven1.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/gloomhaven/gloomhaven2.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/gloomhaven/gloomhaven3.png', ProjectMediaType.IMAGE),
    new ProjectMedia('/assets/images/projects/gloomhaven/gloomhaven4.png', ProjectMediaType.IMAGE)
  ], [
    'A turn base combat game. It is a prototype I made in a few weeks.',
    'The games consists in multiple characters fighting each other. Each one has a their own abilities and stats. The abilities can have ' +
    'an area of damage and leave status effects on the ground such as fire. If a character moves to this status effects, it will be ' +
    'affected'
  ], {
    startDate: new Date(2020, 0, 6),
    finishDate: new Date(2020, 0, 28),
    timeItTook: {years: 0, months: 0, weeks: 3}
  },
  [
    {name: 'Play it on the browser: ', link: 'https://nachodlv.github.io/gloomhaven/'},
    {name: 'Code', link: 'https://github.com/nachodlv/gloomhaven'}
  ],
  [
    ProjectDetails.ConstructLearningDetails(
      [
        'I learned how to make a turn base game',
        'I learned how to deal with asynchronous events'
      ]
    )
  ]);

export {projectGloomhaven};
