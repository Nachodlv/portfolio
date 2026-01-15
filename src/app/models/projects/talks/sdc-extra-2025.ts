import {ProjectMedia} from '../../project-media';
import {Project, ProjectDetails} from '../../project';

const sdcExtra2025 = new Project(
  'sdc-extra-2025',
  'Mass Entity: Understanding Unreal\'s Entity Component System',
  new ProjectMedia(ProjectMedia.getGoogleDriveUrl('11NefyAAsSPVMmeenQ9oEPhcW9gco5clU')),
  undefined,
  [
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('11NefyAAsSPVMmeenQ9oEPhcW9gco5clU')),
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1RnXONgoWee2C8SjPWh0TeyLx4aP5OygD')),
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1OJnAtqhlSbVb_5FqMfAACY1MbusWl4gc')),
  ], [
    'I delivered a talk at the Sumo Developer Conference about Mass Entity, Unreal Engine’s entity component ' +
    'system framework, and its use in game development. The presentation also covered principles of data-oriented design',
    'I introduced the fundamentals of Mass, including fragments, tags, and processors, and demonstrated how to ' +
    'use them through practical examples.'
  ], {
    startDate: new Date(2025, 9, 7),
  },
  undefined,
  [
    new ProjectDetails(
      'Themes',
      [
        'Data Oriented Design',
        'Entity Component System',
        'Mass Entity'
      ]
    )
  ]);

export {sdcExtra2025};
