import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    {
      name: 'figma-assets-mock',
      resolveId(id: string) {
        if (id.startsWith('figma:asset/')) {
          return '\0' + id;
        }
      },
      load(id: string) {
        if (id.startsWith('\0figma:asset/')) {
          return `export default "https://placehold.co/600x400?text=Figma+Asset";`;
        }
      }
    },
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})