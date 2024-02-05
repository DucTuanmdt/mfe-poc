const deps = require("../package.json").dependencies;

const productDomain = process.env.PRODUCT_DOMAIN;
const userDomain = process.env.USER_DOMAIN;

module.exports = {
  name: "mfPortal",
  filename: "remoteEntry.js",
  exposes: {
    "./Navbar": "./src/components/common/Navbar.tsx",
  },
  remotes: {
    mfProduct: `mfProduct@${productDomain}remoteEntry.js`,
    mfUser: `mfUser@${userDomain}remoteEntry.js`,
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
