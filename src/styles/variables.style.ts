interface IVariables {
  [key: string]: string;
}

export const color: IVariables = {
  'white-color': '#ffffff',
  'white-color-light': '#ffffff30',
  'white-color-light-x1': '#ffffff75',
  'white-color-light-x2': 'rgb(255 255 255 / 22%)',
  'white-color-light-x3': 'rgb(255 255 255 / 25%)',
  'black-color': '#000000',
  'black-color-light': '#00000030',
  'black-color-light-x1': '#0C0C0C',
  'black-color-light-x2': 'rgb(0 0 0 / 22%)',
  'black-color-light-x3': 'rgb(0 0 0 / 25%)',
  'gray-color': '#7B7B7B',
  'gray-color-light': '#dedede',
  'gray-color-light-x1': '#E5E5E5',
  'gray-color-light-x2': '#ffffffbf',
  'gray-color-light-x3': '#EFEFEF',
  'gray-color-light-x4': '#EDEDED',
  'gray-color-light-x5': '#464646',
  'red-color': '#D00000',
  'red-colo-x1': '##d00000e3',
  'blue-color': '#518fb4',
  'green-color': '#75bd85f5',
};

export const media: IVariables = {
  sm: 'min-width: 768px',
  md: 'min-width: 1024px',
  lg: 'min-width: 1366px',
};

export const anim: IVariables = {
  smooth: 'transition: all 0.2s linear;',
};
