module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "import/prefer-default-export": 1,
      "no-shadow": 1,
      "consistent-return": 1,
      "no-underscore-dangle" : 0,
      "one-var" : 1,
      "prefer-const": 1
    }
};
