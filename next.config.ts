import { createMDX } from 'fumadocs-mdx/next';
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import './src/env';

const withNextIntl = createNextIntlPlugin();

const config: NextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // 支持最大10MB的文件上传
    },
  },
};

const withMDX = createMDX();
export default withNextIntl(withMDX(config));
