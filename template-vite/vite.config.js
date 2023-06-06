const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        contact: path.resolve(__dirname, 'src/contact.html'),
        main: path.resolve(__dirname, 'src/index.html'),
        topics: path.resolve(__dirname, 'src/topics.html'),
        topic: path.resolve(__dirname, 'src/topic.html')
      }
    }
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}