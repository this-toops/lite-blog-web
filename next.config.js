/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

const nextConfig = {
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    reactStrictMode: true,
    experimental: {
        // 引入ui框架
        transpilePackages: ['tdesign-react']
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });
        return config;
    },
}

module.exports = nextConfig

