const deps = require("../package.json").dependencies;

const domain = process.env.PORTAL_DOMAIN;

module.exports = {
  name: "mfUser",
  filename: "remoteEntry.js",
  exposes: {
    "./UserApp": "./src/shared/UserAppShared.tsx",
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
