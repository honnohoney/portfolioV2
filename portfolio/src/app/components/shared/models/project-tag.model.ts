export enum TagType {
  ALL = 'ALL',
  WEBSITE = 'WEBSITE',
  THREE_D = '3D',
  DRAWING = 'DRAWING',
}

export const TagDisplayText: Record<TagType, string> = {
  [TagType.ALL]: 'All',
  [TagType.WEBSITE]: 'Website',
  [TagType.THREE_D]: '3D',
  [TagType.DRAWING]: 'Drawing',
};
