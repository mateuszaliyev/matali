import { environment } from "./src/environment.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* eslint-disable-next-line @typescript-eslint/require-await */
  redirects: async () => [
    {
      destination: `https://github.com/skni-kod/spacetag`,
      permanent: false,
      source: "/github/spacetag",
    },
    {
      destination: `${environment.NEXT_PUBLIC_GITHUB_URL}/:path*`,
      permanent: false,
      source: "/github/:path*",
    },
    {
      destination: environment.NEXT_PUBLIC_LINKEDIN_URL,
      permanent: false,
      source: "/linkedin",
    },
  ],
};

export default nextConfig;
