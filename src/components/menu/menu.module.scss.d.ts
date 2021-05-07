export type Styles = {
  menuButton: string;
  menuLinks: string;
  menuLink: string;
  open: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
