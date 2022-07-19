const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'h5',
        'alert-link',
<<<<<<< HEAD
        'container-xxl',
        'container-fluid',
        ...whitelister([
          './assets/scss/components/_alerts.scss',
=======
        ...whitelister([
>>>>>>> parent of ed7d284 (Deletes most things, ready for staging merge.)
          './assets/scss/components/_buttons.scss',
          './assets/scss/components/_code.scss',
          './assets/scss/components/_diagrams.scss',
          './assets/scss/components/_syntax.scss',
          './assets/scss/components/_search.scss',
          './assets/scss/common/_dark.scss',
          './node_modules/bootstrap/scss/_dropdown.scss',
<<<<<<< HEAD
=======
          './node_modules/bootstrap/scss/_tooltip.scss',
>>>>>>> parent of ed7d284 (Deletes most things, ready for staging merge.)
          './node_modules/katex/dist/katex.css',
        ]),
      ],
    }),
  ],
}
