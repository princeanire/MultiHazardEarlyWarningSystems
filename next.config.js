/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'https://ulap-reports.georisk.gov.ph/api/reports/:path*', // Proxy to external API
            },
        ];
    },
};

module.exports = nextConfig;