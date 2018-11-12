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
                    node: {
                        paths: [path.join(__dirname, 'src'), 'shared'],
                    },
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
