import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'
import path from 'path'

export default ({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode,  '');
  
  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            BASE_URL: env.BASE_URL,
          }
        }
      }),
    ],
    logLevel: 'info',
    base: env.BASE_URL,
    build: {
      rollupOptions: {
        input: './src/main.jsx',
      }
    },
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        "@": path.resolve(__dirname, './src'),
        // Add more aliases here
      }
    },
  })
};
