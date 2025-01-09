# BrokeAF

Welcome to **BrokeAF**, the sarcastic and stress-busting virtual stock market simulator! Trade fake stocks, lose imaginary fortunes, and compete to prove that you're the least broke of them all.

## Features
- **Fake Trading**: Buy and sell virtual stocks based on real-world data without losing a cent of real money.
- **Leaderboards**: Show off your fictional riches and compete with friends to see who’s the least terrible at trading.
- **Humorous Gamification**: Earn sarcastic badges and climb the fake financial ladder.
- **Responsive Design**: Works seamlessly on desktops and mobiles, so you can lose fake money anywhere.

## Tech Stack
- **Framework**: [Remix](https://remix.run) for fast, modern, and seamless full-stack web applications.
- **Styling**: Tailwind CSS for sleek and responsive design.
- **State Management**: Redux Toolkit for managing app state.
- **API Integration**: Fetch real-time stock prices using external APIs (like Alpha Vantage or Yahoo Finance).

## Getting Started

### Prerequisites
- Node.js (>= 16.x)
- npm or yarn

### Installation
1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/bsahitya/broke-af.git
   cd brokeaf
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

### Running the App
Start the development server:
\`\`\`bash
npm run dev
\`\`\`
The app will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

## Scripts
- \`npm run dev\`: Start the development server with hot reloading.
- \`npm run build\`: Build the app for production.
- \`npm start\`: Start the production server.
- \`npm test\`: Run tests (if configured).

## File Structure
\`\`\`
brokeaf/
├── app/
│   ├── components/        # Reusable UI components
│   ├── routes/            # Remix route files
│   ├── styles/            # Tailwind CSS and other styles
│   ├── utils/             # Utility functions and helpers
├── public/                # Static assets
├── package.json           # Project dependencies and scripts
├── remix.config.js        # Remix configuration
└── tailwind.config.js     # Tailwind CSS configuration
\`\`\`

## Contributing
We welcome sarcastic code contributions, memes, and bug reports!  
- Fork the repo, make changes, and submit a pull request.
- Open an issue if you encounter any fake financial disasters.

## License
This project is licensed under the MIT License.

## Disclaimer
This app is a joke and should be treated as such. It’s not financial advice, and any resemblance to real trading skills is purely coincidental. Trade irresponsibly—because it’s fake money anyway. 🤑


# We use Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
