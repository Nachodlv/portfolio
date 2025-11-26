import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project, ProjectDetails} from '../project';

const projectMD = new Project(
  'md',
  'MD',
  ProjectMedia.getGoogleDriveUrl('1QvOrkzhatQYWj8DphbEjyi80fUy0qfBB'),
  [Technologies.UnrealEngine, Technologies.Cpp],
  [
    new ProjectMedia(ProjectMedia.getYoutubeUrl('cFocxNbdvpA'), ProjectMediaType.VIDEO),
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1QvOrkzhatQYWj8DphbEjyi80fUy0qfBB'), ProjectMediaType.IMAGE),
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1SZgrdcfVPEf2JHTqFzBSAkg5jDhpmsdl'), ProjectMediaType.IMAGE),
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1AAqg2eFlWrKeWWku-57Rws0qUzF0pKGU'), ProjectMediaType.IMAGE),
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1hIAgr9yFeMZc9Hgdiz39aRbt9GdBJ2Kj'), ProjectMediaType.IMAGE),
    new ProjectMedia(ProjectMedia.getGoogleDriveUrl('1FxpL5pDLbN9m-C05lxKqWUZNg69yStDK'), ProjectMediaType.IMAGE),
  ], [
    'MD is a coop multiplayer third person shooter where the player needs cooperate with other players to eliminate monsters. The areas' +
    ' need to be completed to move to the next one. The game ends when eliminating the final boss.',
    'The monsters will drop gun upgrades and the user will be able to attach them in workbenches.',
    'The player is able to dash, melee and make take downs to enemies on low health.',
  ], {
    startDate: new Date(2021, 3, 1),
    finishDate: new Date(2022, 3, 1),
    timeItTook: {years: 1, months: 0},
  },
  undefined,
  [
    ProjectDetails.ConstructLearningDetails(
      [
        'How to load streaming levels in runtime in Unreal Engine',
        'How to use the steam API to connect multiple users in one session',
        'How to correctly work with UI in Unreal Engine'
      ]
    )
  ]
);

export {projectMD};
