module.exports = function(grunt) {

  grunt.initConfig({

    clean: ['dest'],

    'compile-handlebars': {
      build_html: {
        template: 'src/pages/*.html',
        templateData: 'src/pages/*.json',
        handlebars: 'node_modules/handlebars',
        output: 'assemble/*.html',
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


    assemble: {
      options: {
        layout: "src/layout/main.layout.html",
        flatten: true
      },
      pages: {
        files: {
          'dest/': ['assemble/*.html']
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', [
    'clean',
    'compile-handlebars',
    'assemble',
    'connect',
  ]);
};