/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    output: 'standalone',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.(ts|tsx|js|jsx|md|mdx)$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
};

export default nextConfig;
