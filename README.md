# BrokeAF

Welcome to **BrokeAF**, the sarcastic and stress-busting virtual stock market simulator! Trade fake stocks, lose imaginary fortunes, and compete to prove that you're the least broke of them all.

## Features
- **Fake Trading**: Buy and sell virtual stocks based on real-world data without losing a cent of real money.
- **Leaderboards**: Show off your fictional riches and compete with friends to see who’s the least terrible at trading.
- **Humorous Gamification**: Earn sarcastic badges and climb the fake financial ladder.
- **Responsive Design**: Works seamlessly on desktops and mobiles, so you can lose fake money anywhere.

## Tech Stack
- **Framework**: Vite, React for fast, modern, and seamless full-stack web applications.
- **Styling**: Tailwind CSS for sleek and responsive design.
- **State Management**: Redux Toolkit for managing app state.
- **API Integration**: Fetch real-time stock prices using external APIs (like Alpha Vantage or Yahoo Finance).

## Getting Started

### Prerequisites
- Node.js (>= 18.x)
- npm or yarn

### Installation
1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/bsahitya/broke-af.git
   cd brokeaf
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm ci
   \`\`\`

### Running the App
Start the development server:
\`\`\`bash
npm run dev
\`\`\`
The app will be available at [http://localhost:5173](http://localhost:5173).

### Build for Production
\`\`\`bash
npm run build
\`\`\`

## Scripts
- \`npm run dev\`: Start the development server with hot reloading.
- \`npm run build\`: Build the app for production.
- \`npm test\`: Run tests (if configured).

## Contributing
We welcome sarcastic code contributions, memes, and bug reports!  
- Fork the repo, make changes, and submit a pull request.
- Open an issue if you encounter any fake financial disasters.

## License
This project is licensed under the MIT License.

## Disclaimer
This app is a joke and should be treated as such. It’s not financial advice, and any resemblance to real trading skills is purely coincidental. Trade irresponsibly—because it’s fake money anyway. 🤑

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

# We use React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
