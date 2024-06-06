import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import autoStoryGenerator from '@takuma-ru/auto-story-generator';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) =>
    mergeConfig(config, {
      plugins: [
        autoStoryGenerator.vite({
          preset: 'react',
          imports: ['src/components/**/*.tsx', 'src/features/**/*.tsx'],
        }),
      ],
    }),
};
export default config;
