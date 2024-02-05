const deps = require("../package.json").dependencies;

const domain = process.env.PORTAL_DOMAIN;

module.exports = {
  name: "mfProduct",
  filename: "remoteEntry.js",
  exposes: {
    "./ProductApp": "./src/shared/ProductAppShared.tsx",
    "./ProductPage": "./src/pages/Home.tsx",
    "./Pricing": "./src/pages/Pricing.tsx",
  },
  remotes: {
    mfPortal: `mfPortal@${domain}remoteEntry.js`,
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
