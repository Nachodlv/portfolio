import {Technologies} from '../technologies';
import {ProjectMedia} from '../project-media';
import {Project, ProjectDetails} from '../project';

const projectExtractionShooter = new Project(
  'extraction-shooter',
  'Extraction Shooter',
  ProjectMedia.newTextMedia('AAA Extraction Shooter'),
  [Technologies.UnrealEngine, Technologies.Cpp],
  [
  ], [
    'During my time at Nimble Giant, I helped develop a AAA extraction shooter in Unreal Engine 6, which is still in ' +
    'production.',
    'I worked as the lead of the AI team and was in charge of three other programmers.'
  ], {
    startDate: new Date(2021, 7),
    finishDate: new Date(2024, 1),
  },
  undefined,
  [
    ProjectDetails.constructResponsibilitiesDetails(
      [
        'Led the AI team',
        'Implemented enemy AI that roams the open world',
        'Developed AI systems using behavior trees and EQS',
        'Worked with navmesh generation and navigation systems',
        'Implemented open-world AI optimizations'
      ]
    )
  ]);

export {projectExtractionShooter};
