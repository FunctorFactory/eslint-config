import { TSESLint } from '@typescript-eslint/utils';
import tseslint, { ConfigWithExtends } from 'typescript-eslint';

import { Config, defaultConfig } from './config.js';
import * as Core from './core.js';
import * as Documentation from './documentation.js';
import { ALL_JAVASCRIPT, ALL_TYPESCRIPT } from './fileExtensions.js';
import * as Format from './format.js';
import * as Functional from './functional.js';

export const getConfig: (
  config: Readonly<Partial<Config>>,
) => TSESLint.FlatConfig.ConfigArray = (config = {}) => {
  const expandedConfig = { ...defaultConfig, ...config };
  const configs: ConfigWithExtends[] = [
    {
      ignores: [...expandedConfig.ignores],
    },
    {
      files: [...ALL_TYPESCRIPT, ...ALL_JAVASCRIPT],
      languageOptions: {
        parserOptions: expandedConfig.parserOptions,
      },
    },
    ...Core.getConfig(expandedConfig),
    ...Functional.Config,
    ...Documentation.Config,
    ...Format.Config,
  ];

  return tseslint.config(...configs);
};

export default getConfig;
