/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withPlugins(
	[
		[
			withPWA,
			{
				pwa: {
					dest: "public",
				},
			},
		],
		// 추가 플러그인 작성
	],
	nextConfig
);

