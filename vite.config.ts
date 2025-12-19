import { defineConfig } from 'vite'

// Dynamically import the ESM-only plugin so the config can be loaded
// in environments where `require` is used to load the config.
export default defineConfig(async () => {
  const reactPlugin = (await import('@vitejs/plugin-react')).default
  return {
    plugins: [reactPlugin()],
    server: { port: 5173 }
  }
})
