import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectSunbox = new Project(
  'sunbox',
  'Sunbox',
  'assets/images/projects/sunbox/sunbox5.png',
  [Technologies.JavaScript, Technologies.HTML, Technologies.WebGL],
  [
    new ProjectMedia('assets/images/projects/sunbox/sunbox1.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/sunbox/sunbox3.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/sunbox/sunbox5.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/sunbox/sunbox6.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/sunbox/sunbox7.png', ProjectMediaType.IMAGE),
    new ProjectMedia('assets/images/projects/sunbox/sunbox8.png', ProjectMediaType.IMAGE),
  ], [
    'A 3D browser simulation of the Solar System made with a WebGl library called Three.js. I made it with another developer for a side ' +
    'project at the Austral University',
    'In the simulation is possible to change the mass, radius and speed of the planets. Planets can be added and deleted',
    'The code can be found at my GitHub account, nachodlv.'
  ], {
    startDate: new Date(2017, 6),
    finishDate: new Date(2017, 10),
    timeItTook: {years: 0, months: 5}
  }, undefined,
  [
    'I learned how to work in a small team and to program in Javascript and WebGL.'
  ], [
    {name: 'Try it on the browser: ', link: 'https://nachodlv.github.io/sunbox/'},
    {name: 'Code', link: 'https://github.com/nachodlv/sunbox'}
  ]);

export {projectSunbox};
