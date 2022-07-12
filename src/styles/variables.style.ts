interface IVariables {
  [key: string]: string;
}

export const color: IVariables = {
  'white-color': '#ffffff',
  'white-color-light': '#ffffff30',
  'black-color': '#000000',
  'black-color-light': '#00000030',
  'gray-color': '#7B7B7B',
  'gray-color-light': '#dedede',
  'gray-color-light-x1': '#E5E5E5',
  'gray-color-light-x2': '#ffffffbf',
  'gray-color-light-x3': '#EFEFEF',
  'red-color': '#D00000',
  'blue-color': '#518fb4',
};

export const media: IVariables = {
  sm: 'min-width: 768px',
  md: 'min-width: 1024px',
  lg: 'min-width: 1366px',
};

export const anim: IVariables = {
  smooth: 'transition: all 0.2s linear;',
};
