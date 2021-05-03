export type Styles = {
  'hero-text': string;
  'is-visible': string;
  logo: string;
  'nav-menu': string;
  navMenu: string;
  'right-side': string;
  'toggle-menu': string;
  'toggle-theme': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
