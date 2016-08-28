'use strict';

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		watch: {
			scripts: {
				files: ['**/*.jsx', 'constants/*.js'],
				tasks: ['browserify', 'uglify'],
				options: {
					spawn: false,
				},
			},
			files: 'public/css/*.less',
			tasks: ['less', 'cssmin']
		},

		less: {
			development: {
				options: {
					paths: ['public/css/'],
				},
				files: {
					'public/css/app.css': 'public/css/app.less'
				}
			}
		},

		browserify: {
			options: {
				transform: [ [require('grunt-react').browserify , { compact: false }] ]

			},
			app: {
				src: ['react_components/app.jsx'],
				dest: 'public/js/app.js'
			}
		},

		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					'public/dist/app.min.js': ['public/js/app.js']
				}
			}
		},

		cssmin: {
			dist: {
				files: {
					'public/dist/app.min.css': ['public/css/app.css']
				}
			}
		}
	});

	grunt.registerTask('default', 'watch');
};
