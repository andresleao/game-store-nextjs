module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `eslint --fix ${filenames.join(' ')}`
  ]
};
//`npm test -- --findRelatedTests ${filenames.join(' ')}`
