<<<<<<< HEAD
import mermaid from 'mermaid';

var config = {
  theme: 'default',
  fontFamily: '"Jost", -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
};

document.addEventListener('DOMContentLoaded', () => {
  mermaid.initialize(config);
  mermaid.init(undefined, '.language-mermaid');
=======
import mermaid from 'mermaid/dist/mermaid';

var config = {
    theme: 'default',
    fontFamily: '"Jost", -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
    securityLevel: "strict",
};

document.addEventListener('DOMContentLoaded', () => {
    mermaid.initialize(config);
    mermaid.init(undefined, '.language-mermaid');
>>>>>>> parent of ed7d284 (Deletes most things, ready for staging merge.)
});
