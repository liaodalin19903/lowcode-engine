/* eslint-disable max-len */
/* Note: this file is generated by "npm run template", please dont modify this file directly */
/* -- instead, you should modify "static-files/rax/.prettierrc.js.template" and run "npm run template" */
import { ResultFile } from '@lce/lowcode-types';

export default function getFile(): [string[], ResultFile] {
  return [
    ['.'],
    {
      name: '.prettierrc',
      ext: 'js',
      content:
        "const { getPrettierConfig } = require('@iceworks/spec');\n\nmodule.exports = getPrettierConfig('rax');\n",
    },
  ];
}
