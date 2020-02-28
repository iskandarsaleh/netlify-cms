module.exports = {
  stories: [
    '../packages/netlify-cms-ui-default/src/**/story.[js,jsx]',
    '../packages/netlify-cms-core/src/**/*.stories.js',
    '../packages/netlify-cms-ui-legacy/src/**/*.stories.js',
  ],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};
