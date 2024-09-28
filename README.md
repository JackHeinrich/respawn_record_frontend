# RespawnRecord is a project of mine to display my web app development skills

This app was made using Next.js, React, Auth0, and the IGDB API.

It is hosted on Render (free hosting service) at https://respawnrecordv2-frontend.onrender.com

It is an app similar to Letterboxxed, but for games. You can follow others and view which games they've played as well as log the games you have played yourself.

# Home page
![image](https://github.com/user-attachments/assets/442433a0-c241-49d7-8029-6ea4b1f129c5)

# Viewing profiles
![image](https://github.com/user-attachments/assets/9821ca09-78f2-4341-9401-deabcb260e02)

# Search page
![image](https://github.com/user-attachments/assets/41b398d8-6513-4172-b478-02ab21a3a145)

and more features!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
