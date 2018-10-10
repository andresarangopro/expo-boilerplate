module.exports = {
    "env": {
        "react-native/react-native": true,
        "es6": true 
    },
    "extends": ["eslint:recommended", "plugin:react-native/all"],
    "plugins": [
        "react",
        "react-native"
    ],
    "parser": "babel-eslint",   
    "rules": {
        "react/jsx-filename-extension": [
            2,
            {
                "extensions": [".js", ".jsx"]
            }
        ],
        "react/jsx-uses-vars": 2,
        "react-native/no-color-literals": [0],
        "react/forbid-prop-types": [0],
        "react/require-default-props": [0],
        "global-require": [0],
        "no-underscore-dangle": [0],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};