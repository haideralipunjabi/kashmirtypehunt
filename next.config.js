/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: "custom",
        loaderFile: "./lib/image.ts"
    }
}

module.exports = nextConfig
