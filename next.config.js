// yarn add next-compose-plugins next-transpile-modules @solana/wallet-adapter-base @solana/wallet-adapter-phantom @solana/wallet-adapter-react
// yarn add @solana/wallet-adapter-solflare @solana/wallet-adapter-sollet @solana/wallet-adapter-wallets
// Webpack 5 upgrade it is not possible to use a relative path as config entry key... So simply replacing by...

// This works but fail to build

const withPlugins = require("next-compose-plugins");


const withTM = require("next-transpile-modules")([
  "@solana/wallet-adapter-base",
  "@solana/wallet-adapter-phantom",
  "@solana/wallet-adapter-react",
  "@solana/wallet-adapter-solflare",
  "@solana/wallet-adapter-sollet",
  "@solana/wallet-adapter-wallets",
]);

const plugins = [
  [
    withTM, 
    {
      // webpack5: true,
      // reactStrictMode: true,
    }
  ],
];

const env = require("./src/config/environment");

const nextConfig = {
  publicRuntimeConfig: { ...env },

  webpack: (config, { isServer }) => {
    // console.log("isServer");
    // console.log(isServer);
    // console.log(config);
    if (!isServer) {
      // No more fallback at webpack5?
      // config.resolve.fallback.fs = false;
    }

    config.externals = config.externals || {};
    config.externals["styletron-server"] = "styletron-server";
    // config.externals["fs"] = "fs";

    // config.target = "serverless",

    // Update with object assign?
    config.module = {
      rules: config.module.rules.concat([
        {
          test: /\.md$/,
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]',
          },
        },
        {
          test: /\.md$/,
          loader: 'raw-loader',
        }
      ]),
    }

    config.resolve = {
      ...config.resolve,
      // To solve the current @serum/anchor dependency module not found issue
      fallback: {
        "fs": false,
        "path": false,
        "os": false,
        "crypto": false,
        "stream": false,
        "zlib": require.resolve("browserify-zlib"),
        // "zlib": false,
      }
    }

    return config;
  },

  // future: { webpack5: false },

  // Use this for baseapi relevant errors
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // experimental: {
  //   esmExternals: "loose",
  // },
  // experimental: {
  //   esmExternals: 'loose',
  // },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  swcMinify: true,
};

// const nextConfig = {
//   distDir: 'build',
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//     }
//     return config;
//   },
// };

// module.exports = withPlugins(plugins, nextConfig);
module.exports = nextConfig;
