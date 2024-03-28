import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectNavMesh = new Project(
  'navmesh',
  'Custom Navigation Mesh',
  'https://lh3.googleusercontent.com/drive-viewer/AKGpihaI2veyiBILHMqPC4e7LOSeW4SUkNRybQi0qm9vewcUvuAZd00lMGBf7qCr4fcoTqbBNK_OJ8SeW8w0A-sLE8EQJZ92=s1600-v0',
  [Technologies.UnrealEngine, Technologies.Cpp],
  [
    new ProjectMedia('https://www.youtube.com/embed/tQc5QeUWZQ0', ProjectMediaType.VIDEO),
    new ProjectMedia('https://lh3.googleusercontent.com/drive-viewer/AKGpihaI2veyiBILHMqPC4e7LOSeW4SUkNRybQi0qm9vewcUvuAZd00lMGBf7qCr4fcoTqbBNK_OJ8SeW8w0A-sLE8EQJZ92=s1600-v0', ProjectMediaType.IMAGE),
    new ProjectMedia('https://lh3.googleusercontent.com/drive-viewer/AKGpihZmXwBs3bCT-ghPDf3nKRqH0wTY1AhhrxofZgnrMDJh6VVZ2eN073LH4zXTPKBbajv9HEEJeJFlirYzZMkJgOU7SqQcHQ=s1600-v0', ProjectMediaType.IMAGE),
    new ProjectMedia('https://lh3.googleusercontent.com/drive-viewer/AKGpihaI2veyiBILHMqPC4e7LOSeW4SUkNRybQi0qm9vewcUvuAZd00lMGBf7qCr4fcoTqbBNK_OJ8SeW8w0A-sLE8EQJZ92=s1600-v0', ProjectMediaType.IMAGE),
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
