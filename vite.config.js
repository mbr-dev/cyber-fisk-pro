import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
	server: { https: true },
  plugins: [react(), mkcert()],
  // base: "/cyber-fisk-pro",
  // server: {
  //   host: '0.0.0.0',
  //   port: 5173,
  // },
})
