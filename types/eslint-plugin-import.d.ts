import { ESLint } from 'eslint';

declare module 'eslint-plugin-import' {
  type ConfigKeys =
    | 'recommended'
    | 'errors'
    | 'warnings'
    | 'react'
    | 'react-native'
    | 'electron'
    | 'typescript';
  export const configs: { [key in configKeys]: ESLint.ConfigData };
  export const rules: Record<string, LooseRuleDefinition> | undefined;
}
