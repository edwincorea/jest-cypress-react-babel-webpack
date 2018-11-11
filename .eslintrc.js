const path = require('path')

module.exports = {
    extends: [
        'kentcdodds',
        'kentcdodds/import',
        'kentcdodds/webpack',
        'kentcdodds/jest',
        'kentcdodds/react',
    ],
    rules: {
        'linebreak-style': ['error', 'windows'],
    },
    overrides: [
        {
            files: ['**/__tests__/**'],
            settings: {
                'import/resolver': {
                    jest: {
                        jestConfigFile: path.join(
                            __dirname,
                            './jest.config.js',
                        ),
                    },
                },
            },
        },
    ],
}
