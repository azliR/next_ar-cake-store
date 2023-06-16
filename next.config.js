module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: {
                tailwindcss: {},
                autoprefixer: {},
              },
            },
          },
        },
      ],
    })
    return config
  },
}
