import eatingImage from 'assets/eating.svg';
import AppConfig from 'configs/app.config';
import { parseTemplate } from 'utils';

import htmlString from './hero.html';
import styles from './hero.module.scss';

type HTMLString = {
  appDescription: string;
  heroStyle: string;
  readyToPourStyle: string;
  lampStyle: string;
  lemonadeStyle: string;
  eatingImage: string;
};

class Hero extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    const template = parseTemplate<HTMLString>(htmlString, {
      appDescription: AppConfig.description,
      heroStyle: styles.hero,
      readyToPourStyle: styles.readyToPour,
      lampStyle: styles.lamp,
      lemonadeStyle: styles.lemonade,
      eatingImage,
    });

    this.appendChild(template.content);
  }
}

customElements.define('app-hero', Hero);
export default Hero;
