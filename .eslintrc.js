module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": [
            2,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ]
    }
};