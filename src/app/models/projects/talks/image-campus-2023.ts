import {ProjectMedia} from '../../project-media';
import {Project, ProjectDetails} from '../../project';

const imageCampus2023 = new Project(
  'image-campus-2023',
  'How to run a Game Jam and not die trying',
  new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1sL8xw_beIdwE4fAP_36AASejIid_cgqs')),
  undefined,
  [
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1sL8xw_beIdwE4fAP_36AASejIid_cgqs')),
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1DE2BzAkLCd0Zmok-KQAeaTyYz2RGfxiR')),
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1p8rrfbHTduLwtGs9NpqltkW_TpwwNgYe')),
  ], [
    'I delivered a talk at Image Campus University about how to participate in a game jam and make the most of the ' +
    'experience. I covered the main stages participants usually go through during a game jam, as well as common ' +
    'challenges they may encounter.',
    'The talk took place before the start of the Image Campus Game Jam, and the audience consisted of university ' +
    'students who were about to take part in the event.'
  ], {
    startDate: new Date(2023, 1, 3),
  },
  [
    {
      name: 'Image Campus',
      link: 'https://www.imagecampus.edu.ar/'
    },
    {
      name: 'Slides',
      link: 'https://www.canva.com/design/DAFZh3ji7h4/JngOhkTewt65S32uuRNIIA/edit?utm_content=DAFZh3ji7h4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
    }
  ],
  [
    new ProjectDetails(
      'Themes',
      [
        'Team formation',
        'Coming up with an idea',
        'Planning',
        'Production'
      ]
    )
  ]);

export {imageCampus2023};
