import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [sveltekit(), Icons({
		compiler: 'svelte',
		autoInstall: true
	}),],
	// server: {
	// 	host: '0.0.0.0',  // Bind to all network interfaces
	// 	port: 5173,       // Use port 5173
	// 	strictPort: true, // Ensure it uses the specified port
	// },
});
