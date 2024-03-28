import {Technologies} from '../technologies';
import {ProjectMedia, ProjectMediaType} from '../project-media';
import {Project} from '../project';

const projectMD = new Project(
  'md',
  'MD',
  'https://lh3.googleusercontent.com/drive-viewer/AKGpihZMZ80hCmRZrL6Oau1g_wSiajIykV9Ag-RXJQqE6wCMPPmKBsds3AGx90YdiI80slzlxsSnApYvAflNeYf4vXtDC3Wfhw=s2560',
  [Technologies.UnrealEngine, Technologies.Cpp],
  [
    new ProjectMedia(ProjectMedia.getYoutubeUrl('cFocxNbdvpA'), ProjectMediaType.VIDEO),
    new ProjectMedia('https://lh3.googleusercontent.com/drive-viewer/AKGpihZMZ80hCmRZrL6Oau1g_wSiajIykV9Ag-RXJQqE6wCMPPmKBsds3AGx90YdiI80slzlxsSnApYvAflNeYf4vXtDC3Wfhw=s2560', ProjectMediaType.IMAGE),
    new ProjectMedia('https://lh3.googleusercontent.com/drive-viewer/AKGpihZE3Fu7G9klr1OXSMAyLdAOtRRsiIcK_6vUUJ1TsJf1BxpNp82kRiaCVPmkNWbZhWkJeM-juxUwEBJYv_ZtFCmwaPh41A=s1600-v0', ProjectMediaType.IMAGE),
    new ProjectMedia('https://lh3.googleusercontent.com/drive-viewer/AKGpihbxCtoztAsgvowc8nf8IkUlhuMzzUjCGyGlugodeUGNt6VRG8pyzNgvVN6bM4aFFPZRxl9exZetl1MJXChPSSD94uqC=s1600-v0', ProjectMediaType.IMAGE),
    new ProjectMedia('https://lh3.googleusercontent.com/drive-viewer/AKGpihbML4oiOgaFUhdUGSUFsDMuXae4F1V2xs9VJ6lQroukYH2Mo2_5hpFQsrfcNdHo7eJyn_Jzp7gSBCkQ9ZsUvfKe7s-pZw=s1600-v0', ProjectMediaType.IMAGE),
    new ProjectMedia('https://lh3.googleusercontent.com/drive-viewer/AKGpihaq7vf5Kqm3SUs3NGybPO2j4caaR1uqwY--smu5fJilb04NqBeLXcAD8GXdCS4rOO7AEogXnXkJlyWjDn3ZB5paPTIRIA=s1600-v0', ProjectMediaType.IMAGE),
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
  undefined, [
    'How to load streaming levels in runtime in Unreal Engine',
    'How to use the steam API to connect multiple users in one session',
    'How to correctly work with UI in Unreal Engine'
  ]);

export {projectMD};
