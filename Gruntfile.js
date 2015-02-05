module.exports = function(grunt) {

  grunt.initConfig({
    clean: ['dest'],

    'compile-handlebars': {
      build_html: {
        template: 'src/html/**/*.html',
        templateData: 'src/json/**/*.json',
        handlebars: 'node_modules/handlebars',
        output: 'dest/*.html',
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          hostname: 'localhost',
          base:'dest/',
          keepalive:true,
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', [
    'clean',
    'compile-handlebars',
    'connect',
  ]);
};