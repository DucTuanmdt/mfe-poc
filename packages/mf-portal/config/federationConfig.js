const deps = require("../package.json").dependencies;

const productDomain = process.env.PRODUCT_DOMAIN;

module.exports = {
  name: "mfPortal",
  filename: "remoteEntry.js",
  exposes: {
    "./Navbar": "./src/components/common/Navbar.tsx",
  },
  remotes: {
    mfProduct: `mfProduct@${productDomain}remoteEntry.js`,
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
