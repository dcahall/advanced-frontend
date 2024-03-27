module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                ".eslintrc.{js,cjs}"
            ],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ['./tsconfig.json']
    },
    plugins: [
        "react",
        "i18next"
    ],
    settings: {
        react: {
            version: "17.0.2"
        }
    },
    rules: {
        quotes: "off",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-props-no-spreading": "warn",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "i18next/no-literal-string": [2, { markupOnly: true }]
    }
}
