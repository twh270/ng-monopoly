'use strict';

var path = require('path');

module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt); 

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      hapi: {
        files: ['app/*.js'],
        tasks: ['hapi'],
        options: {
          spawn: false // Newer versions of grunt-contrib-watch might require this parameter.
        }
      }
    },
    hapi: {
      server_options: {
        options: {
          server: path.resolve('./app/server'),
          create_options: { port: 3001 },
          bases: {
            '/': path.resolve('./')
          },
          noasync: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-hapi');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('server', ['hapi', 'watch']);
};
