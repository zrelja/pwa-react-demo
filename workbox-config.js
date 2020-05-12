module.exports = {
  "globDirectory": "app/",
  "globPatterns": [
    "**/*.{json,ico,html,png,txt,css,js,svg,lock}"
  ],
  "swDest": "app/public/sw.js",
   // Define runtime caching rules.
   runtimeCaching: [{
    // Match any request that ends with .png, .jpg, .jpeg or .svg.
    urlPattern: /\.(?:js|png|jpg|jpeg|svg)$/,

    // Apply a cache-first strategy.
    handler: 'CacheFirst',

    options: {
      // Use a custom cache name.
      cacheName: 'statics',

      // Only cache 10 images.
      expiration: {
        maxEntries: 100,
      },
    },
  }],
  cleanupOutdatedCaches: false,
};