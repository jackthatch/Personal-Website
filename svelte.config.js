import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),

    // Increase the maxRequestBodySize
    server: {
      middleware: [
        // Custom middleware for increasing maxRequestBodySize
        (req, res, next) => {
          req.server.request.connection.server.maxHeadersCount = 100;
          req.server.request.connection.server.maxHeaderSize = 32768;
          req.server.request.connection.server.maxBodySize = 104857600;
          next();
        }
      ]
    }
  }
};

export default config;
