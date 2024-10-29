import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  staticDirs: ['..\\public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: [
   '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: (config) => {
   // Verifica se config.resolve existe e se modules é um array
   if (config.resolve && Array.isArray(config.resolve.modules)) {
    config.resolve.modules.push(`${process.cwd()}/src`);
  } else {
    // Se não, inicializa como um array
    config.resolve = {
      ...(config.resolve || {}),
      modules: [`${process.cwd()}/src`]
    };
  }
  return config;
  }
};
export default config;
