import AppConfig from 'configs/app.config';
import { parseTemplate } from 'utils';

import htmlString from './footer.html';
import styles from './footer.module.scss';

type HTMLString = {
  year: string;
  appName: string;
  copyrightStyle: string;
  iconStyle: string;
};

class Footer extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    const year = `${new Date().getFullYear()}`;
    const template = parseTemplate<HTMLString>(htmlString, {
      year,
      appName: AppConfig.name,
      copyrightStyle: styles.copyright,
      iconStyle: styles.icon,
    });

    this.appendChild(template.content);
  }
}

customElements.define('app-footer', Footer);
export default Footer;
