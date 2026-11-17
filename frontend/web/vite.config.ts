import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: true,
        port: 3000,
    },
    build: {
        outDir: 'dist',
        sourcemap: 'hidden',
    },
    plugins: [viteTsconfigPaths()],
});
