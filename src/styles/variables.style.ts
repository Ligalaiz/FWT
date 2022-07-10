interface IColor {
  [key: string]: string;
}

export const color: IColor = {
  'white-color': '#ffffff',
  'white-color-light': '#ffffff30',
  'black-color': '#000000',
  'black-color-light': '#00000030',
  'gray-color': '#dedede',
  'gray-color-light': '#E5E5E5',
  'gray-color-light-x1': '#ffffffbf',
  'red-color': '#D00000',
  'blue-color': '#518fb4',
};

export const media: IColor = {
  sm: 'min-width: 768px',
  md: 'min-width: 1024px',
  lgM: 'min-width: 1366px',
  lg: 'min-width: 1367px',
};
