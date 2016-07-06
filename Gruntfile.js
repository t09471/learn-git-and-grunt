'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //Basic info and settings about grunt plugins
        pkg: grunt.file.readJSON('package.json'),

        //Task of cssmin plugin
        cssmin: {
            combine: {
                files: {
                    'release/main.min.css': ['css/*.css']
                }
            }
        },

        //Task of uglify plugin
        uglify: {
            combine: {
                files: {
                    'release/main.min.js': ['Scripts/*.js', '!Scripts/*.min.js']
                }
            }
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'Scripts/.js',
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('default', ['cssmin', 'uglify', 'jshint']);
};