module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "createDefaultProgram": true
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    "react": {
      "version": "16.11"
    }
  },
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "prettier/prettier": [
      "error", {
        "semi": false
      }
    ]
  }
}
