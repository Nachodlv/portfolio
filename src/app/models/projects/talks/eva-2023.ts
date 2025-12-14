import {ProjectMedia} from '../../project-media';
import {Project, ProjectDetails} from '../../project';

const talkEva2023 = new Project(
  'eva-2023',
  'Building your own AI in Unreal Engine',
  new ProjectMedia(ProjectMedia.getGoogleDriveUrl('15XHHZa_FM63A2No02bm6BcUxj0e16M6x')),
  undefined,
  [
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('15XHHZa_FM63A2No02bm6BcUxj0e16M6x')),
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1mvy_Y0t-ekcaFIH_1BmllqEN5fERIBB1')),
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1TAVVOGO6Xi9doq4tvFI-dEXj9Dq2Juyk')),
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1-aPt4l63nTd-rL0pV7vhuBvAcOeksiM8')),
  ], [
    'I delivered a presentation at EVA 2023 on the tools provided by Unreal Engine for developing AI in games. The ' +
    'session offered a high-level overview of these systems and demonstrated how they can be applied in practical ' +
    'game development scenarios',
    'The presentation covered a range of Unreal Engine AI and debugging tools, including Behavior Trees, State Trees, ' +
    'the Perception System, the Navigation System, the Environment Query System (EQS), Visual Logger, Smart Objects, ' +
    'and related technologies.'
  ], {
    startDate: new Date(2023, 8, 15),
  },
  [
    {
      name: 'Eva',
      link: 'https://expoeva.com/en/'
    },
    {
      name: 'Slides',
      link: 'https://www.canva.com/design/DAFuFXIT6Os/G_qUzj0h4SFCAc9NIlD-Kg/edit?utm_content=DAFuFXIT6Os&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    }
  ],
  [
    new ProjectDetails(
      'Themes',
      [
        'Behavior Tree',
        'State Tree',
        'Perception System',
        'Environment Query System (EQS)',
        'Smart Object',
        'Visual Logger',
        'Gameplay Debugger',
        'Mass Entity'
      ]
    )
  ]);

export {talkEva2023};
