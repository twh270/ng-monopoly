'use strict';

var path = require('path');

module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt); 

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    hapi: {
      options: {
          server: path.resolve('./app/server')
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-hapi');
};
