module.exports = {
    plugins: ['screeps', 'eslint-plugin-prettier'],
    env: {
        es6: true,
        node: true,
        'screeps/screeps': true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        'prettier/prettier': 'error',
        'eol-last': 2,
        indent: ['warn', 4, { SwitchCase: 1 }],
        'no-unused-expressions': 0,
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: true,
            },
        ],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
    },
    // eslint-disable-next-line semi
}
