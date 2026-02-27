/* eslint-disable import/no-anonymous-default-export */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0], // Disable case check (allows sentence case)
    'subject-full-stop': [0], // Disable full stop check (allows . at end)
    'header-max-length': [0], // Disable header length check
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'ci',
        'build',
      ],
    ],
  },
};
