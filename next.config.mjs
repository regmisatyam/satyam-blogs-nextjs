// next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "satyamregmi.com.np",
          port: '', // Optional, specify if your domain uses a non-standard port
          pathname: '/images/**', // Optional, specify the path pattern for images
        },
        {
          protocol: 'https',
          hostname: "blogs.satyamregmi.com.np",
          port: '', // Optional, specify if your domain uses a non-standard port
          pathname: '/uploads/**', // Optional, specify the path pattern for images
        },
        {
          protocol: 'https',
          hostname: "play-lh.googleusercontent.com",
          port: '', // Optional, specify if your domain uses a non-standard port
          pathname: '/**', // Optional, specify the path pattern for images
        },
        {
          protocol: 'https',
          hostname: "games.satyamregmi.com.np",
          port: '', // Optional, specify if your domain uses a non-standard port
          pathname: '/**', // Optional, specify the path pattern for images
        },
      ],
    },
  };
  