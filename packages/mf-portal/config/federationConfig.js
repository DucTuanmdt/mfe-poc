const deps = require("../package.json").dependencies;

module.exports = {
    name: 'mfPortal',
    filename: 'remoteEntry.js',
    exposes: {
        "./Navbar": "./src/components/common/Navbar.tsx",
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
}