module.exports = {
    extends: ['eslint:recommended', 'next', 'next/core-web-vitals', 'prettier'],
    settings: {
        next: {
            rootDir: ['apps/*/', 'packages/*/'],
        },
    },
    rules: {
        '@next/next/no-html-link-for-pages': 'off',
        'react/jsx-key': 'off',
    },
    overrides: [
        {
            files: ['*.tsx'],
            rules: {
                'no-undef': 'off',
                'no-unused-vars': [
                    'warn', // or error
                    {
                        argsIgnorePattern: '^_',
                        varsIgnorePattern: '^_',
                        caughtErrorsIgnorePattern: '^_',
                    },
                ],
            },
        },
    ],
}
