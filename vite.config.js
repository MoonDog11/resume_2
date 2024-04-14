import { defineConfig } from 'vite';

export default defineConfig({
  // Configuración del servidor de desarrollo
  server: {
    port: 3000, // Puerto en el que se ejecutará el servidor de desarrollo
  },
  // Configuración de la construcción
  build: {
    outDir: 'dist', // Directorio de salida para los archivos construidos
  },
  // Configuración de los plugins de Vite (si los utilizas)
  plugins: [
    // Lista de plugins Vite que quieres utilizar
  ],
  // Configuración específica del HTML
  html: {
    filename: 'index.html', // Nombre del archivo HTML principal
    // Otras opciones HTML, como título, metadatos, etc.
  },
});