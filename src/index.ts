import tseslint from 'typescript-eslint';

import * as Documentation from './documentation.js';
import * as Functional from './functional.js';
import * as Imports from './imports.js';
import * as Format from './format.js';
import * as Core from './core.js';

export const Config = tseslint.config(
  ...Core.Config,
  ...Functional.Config,
  ...Documentation.Config,
  ...Format.Config,
  ...Imports.Config,
);

export default Config;
