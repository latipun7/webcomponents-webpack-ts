import { clearAllChild, parseTemplate, showErrorMessageElement } from 'utils';

import htmlString from './home.html';
import styles from './home.module.scss';

type HTMLString = {
  gridContainerStyle: string;
  loadingStyle: string;
};

class Home extends HTMLElement {
  private gridContainer: HTMLDivElement | null;

  constructor() {
    super();

    this.render();
    this.gridContainer = this.querySelector(`.${styles.gridContainer}`);
  }

  async connectedCallback() {
    try {
      // await
      setTimeout(() => {
        clearAllChild(this.gridContainer);
        this.gridContainer?.classList.remove(`${styles.isLoading}`);

        [1, 2, 3, 4, 5].forEach((number) => {
          const childElement = document.createElement('div');

          childElement.style.borderRadius = '1rem';
          childElement.style.backgroundColor = 'white';
          childElement.style.display = 'flex';
          childElement.style.justifyContent = 'center';
          childElement.style.alignItems = 'center';
          childElement.style.height = '3rem';
          childElement.style.boxShadow = '0 0 7px 2px hsla(0, 0%, 0%, 0.2)';

          childElement.innerText = `${number}`;

          this.gridContainer?.appendChild(childElement);
        });
      }, 1500);
    } catch (error) {
      if (error instanceof Error) {
        showErrorMessageElement(this.gridContainer, error.message);
      }
    }
  }

  render() {
    const template = parseTemplate<HTMLString>(htmlString, {
      gridContainerStyle: `${styles.gridContainer} ${styles.isLoading}`,
      loadingStyle: styles.loading,
    });

    this.appendChild(template.content);
  }
}

customElements.define('app-home', Home);
export default Home;
