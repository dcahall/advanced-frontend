module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:storybook/recommended",
        "plugin:storybook/recommended",
        "plugin:react-hooks/recommended-legacy"
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: ["*.ts", "*.tsx"],
            parserOptions: {
                sourceType: "script"
            }
        },
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                "max-len": 'off'
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
        "max-len": ["error", 120],
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-props-no-spreading": "warn",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/no-unused-vars": "error",
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, onlyAttribute: [""] }
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "@typescript-eslint/no-invalid-void-type": "off",
        "react/display-name": "off"
    }
}
