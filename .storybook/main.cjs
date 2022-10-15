module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  // caso o caminho seja fixo: "www.example.com.br" não precisa fazer esse ajuste
  viteFinal: (config, { configType }) => {
    if(configType === "PRODUCTION") {
      config.base = '/rocketseat-ignite-lab-design-system'
    }

    return config;
  }
}