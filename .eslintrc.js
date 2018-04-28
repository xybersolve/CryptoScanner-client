/*
    "extends": "airbnb"
    "extends": ["eslint:recommended", "plugin:react/recommended"],
*/
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
      },
      "extends": "airbnb",
      "parserOptions": {
        "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
        },
        "sourceType": "module"
      },
      "plugins": [ "react" ],
      "rules": {
        "indent": ["error", 2],
        "linebreak-style": ["error","unix"],
        "quotes": ["error","single"],
        "semi": ["error","always"],
        "no-console": 0,
        "no-useless-escape": 0,
        "no-multi-spaces": 0,
        "react/prop-types": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-filename-extension": 0,
        "react/forbid-component-props": [0, { "forbid": [] }],
        "jsx-a11y/anchor-is-valid": [ "error", {
          "components": [ "Link" ],
          "specialLink": [ "hrefLeft", "hrefRight", "to" ],
          "aspects": [ "noHref", "invalidHref", "preferButton" ]
        }],
        "class-methods-use-this": 0,
      }
}
