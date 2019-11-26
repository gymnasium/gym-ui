import { create } from '@storybook/theming';
import { color } from '../src/styles';
export default create({
  base: 'light',

  // colorPrimary: 'hotpink',
  // colorSecondary: 'deepskyblue',

  // UI
  // appBg: `${color.black}`,
  // appContentBg: `${color.black}`,
  // appBorderColor: 'silver',
  // appBorderRadius: 4,

  // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  // Text colors
  // textColor: `${color.white}`,
  // textInverseColor: `${color.black}`,

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'Aquent Gymasium UI',
  brandUrl: 'https://thegymnasium.com',
  brandImage:
    'https://thegymnasium.com/static/gymnasium/images/gymnasiumLogo2.png',
});
