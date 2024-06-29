import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

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
  })
};


// export default defineConfig({
//   plugins: [react(),
//     createHtmlPlugin({
//       minify: true,
//       inject: {
//         data: {
//           BASE_URL: base,
//         }
//       }
//     })
//   ],
//   logLevel: 'info',
//   base: '/',
//   build: {
//     rollupOptions: {
//       input: './src/index.jsx',
//     }
//   },
// })
