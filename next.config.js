/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    reactStrictMode: true,
    experimental: {
        // 引入ui框架
        transpilePackages: ['tdesign-react']
    }
}

module.exports = nextConfig

