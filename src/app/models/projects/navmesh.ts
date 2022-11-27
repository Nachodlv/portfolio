import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectNavMesh = new Project(
  'navmesh',
  'Custom Navigation Mesh',
  'https://drive.google.com/uc?export=view&id=1PD7q5vYqcSP9ne6w-IYOpxzgzrx6XNcw',
  [Technologies.UnrealEngine, Technologies.Cpp],
  [
    new ProjectMedia('https://www.youtube.com/embed/tQc5QeUWZQ0', ProjectMediaType.VIDEO),
    new ProjectMedia('https://drive.google.com/uc?export=view&id=1PD7q5vYqcSP9ne6w-IYOpxzgzrx6XNcw', ProjectMediaType.IMAGE),
    new ProjectMedia('https://drive.google.com/uc?export=view&id=1P5XQO3KrkrYzSQsezLSD-NPZn3py7Mf3', ProjectMediaType.IMAGE),
    new ProjectMedia('https://drive.google.com/uc?export=view&id=1N7mFoVK-btS9kBebheJ6vgbcAfpBz-iO', ProjectMediaType.IMAGE),
  ], [
    'Implemented a multi threaded custom navigation mesh generator in Unreal Engine from scratch.',
    'As seen in the attached video, the calculation of the navmesh is being made in another thread and it does not freeze the engine.' +
    'The nav mesh bounds can me separated so the work is distributed in multiple threads',
    'I am still working on it so it has some missing implementations. For example the smoothing of the path finding, the bake of the ' +
    'results and the combination of multiple navmesh bounds. The current triangulation method is causing some glitches specially on ' +
    'stairs so it needs a reimplementation.'
  ], {
    startDate: new Date(2021, 12, 1)
  },
  undefined, [
    'My knowledge about navigation mesh before starting this project was zero, so I learned everything about it',
    'How to make micro optimizations on high demand functions and big data',
    'Multi thread in Unreal Engine',
  ], [
    {name: 'Source code', link: 'https://github.com/Nachodlv/custom-navmesh'},
  ]);

export {projectNavMesh};
