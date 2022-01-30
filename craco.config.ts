import path from 'path'
const CracoLessPlugin = require('craco-less')
const { CracoAliasPlugin, configPaths } = require('react-app-rewire-alias')

export = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAliasPlugin,
      options: { alias: configPaths('./tsconfig.path.json') },
    },
  ],
  style: {
    modules: {
      localIndentName:
        'udemy__[name:toLowercase]__[path:toLowercase]--[hash:base64:5]',
      localIndentSalt: 'udemy-v1',
      localsConvention: 'camelCase',
      localIndentContext: path.resolve(__dirname, 'src'),
    },
  },
  babel: {
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ts', '.tsx', '.js'],
          alias: {
            '@hook/*': './src/hooks/*',
            '@entity/*': './src/entities/*',
            '@utils/*': './src/utils/*',
            '@data/*': './src/data/*',
            '@assets/*': './src/assets/*',
            '@components/*': './src/components/*',
            '@reducers/*': './src/store/reducers/*',
            '@middlewares/*': './src/store/middlewares/*',
          },
        },
      ],
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],
      [
        '@babel/plugin-proposal-private-methods',
        {
          loose: true,
        },
      ],
    ],
  },
}
