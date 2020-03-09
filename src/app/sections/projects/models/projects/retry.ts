import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectRetry = new Project('Retry',
  'assets/images/projects/retry/retry1.jpeg',
  [Technologies.Unity, Technologies.CSharp],
  [
    new ProjectMedia('https://www.youtube.com/embed/itrQ_GWM4c8', ProjectMediaType.VIDEO, 'Gameplay'),
    new ProjectMedia('assets/images/projects/retry/retry1.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/retry/retry2.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/retry/retry3.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/retry/retry4.jpeg', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/retry/retry5.jpeg', ProjectMediaType.IMAGE),
  ], [
    'A infinite scroll space shooter. When you die, your previous self fight by your side against the enemy ships.',
    'I made all the programming in two weeks, the assets are taken from Google Images.',
    'The player movement and the enemy spawn locations are recorded so they can be played once the player dies. These ' +
    'recordings don\'t generate memory allocations during the game loop. '
  ], {
    startDate: new Date(2020, 1, 15),
    finishDate: new Date(2020, 1, 29),
    timeItTook: {years: 0, months: 0, weeks: 2}
  }, undefined,
  [
    'Learned how to use the Unity debugger and avoid the garbage collector by limiting the memory allocation during ' +
    'the game.',
    'Learned how to deploy a game in Google Play'
  ], [
    {name: 'Try it on the browser: ', link: 'https://nachodlv.github.io/retry/'},
    {name: 'Code', link: 'https://github.com/nachodlv/retry'}
  ]);

export {projectRetry};
