import AppConfig from 'configs/app.config';

/**
 * Parse HTML string into HTML Template Element
 * @param templateString String of valid HTML
 * @param mapping Map HTML mustache template `{{key}}` to valid string value
 * @returns HTML Template Element
 */
function parseTemplate<Type extends Record<string, string>>(
  templateString: string,
  mapping?: Type
): HTMLTemplateElement {
  const template = document.createElement('template');
  let processedTemplateString = templateString;

  if (mapping) {
    Object.keys(mapping).forEach((key) => {
      processedTemplateString = processedTemplateString.replace(
        new RegExp(`{{${key}}}`, 'gm'),
        mapping[key]
      );
    });
  }

  template.innerHTML = processedTemplateString;

  return template;
}

/**
 * Clear all child of a parent element
 * @param parentElement Parent element that the child want to clear
 */
function clearAllChild(parentElement: HTMLElement | null) {
  while (parentElement?.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}

/**
 * Check if value is empty. Empty is `[]`, `{}`, `''`, `null`, and `undefined`.
 * @param value Value to check
 * @returns boolean
 */
function isEmpty(
  value: string | unknown[] | Record<string, unknown> | null | undefined
) {
  return !Object.entries(value || {}).length;
}

/**
 * Show error message element to the parent element
 * @param parentElement Parent element of this message to append
 * @param message Error message to show
 * @param style Optional style for this message element
 */
function showErrorMessageElement(
  parentElement: HTMLElement | null,
  message: string,
  style?: string
) {
  const paragraphElement = document.createElement('p');

  clearAllChild(parentElement);
  paragraphElement.style.textAlign = 'center';
  if (style) paragraphElement.classList.add(style);
  paragraphElement.innerText = message;
  parentElement?.appendChild(paragraphElement);
}

/**
 * Get publicPath from app configuration.
 * @returns publicPath
 */
function getPublicPath() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    return AppConfig.productionPublicPath;
  }

  return AppConfig.developmentPublicPath;
}

export {
  clearAllChild,
  isEmpty,
  getPublicPath,
  parseTemplate,
  showErrorMessageElement,
};
