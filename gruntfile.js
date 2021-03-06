module.exports = function(grunt) {
  // Do grunt-related things in here

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// uglify: {
		//   options: {
		//     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		//   },
		//   build: {
		//     src: 'src/<%= pkg.name %>.js',
		//     dest: 'build/<%= pkg.name %>.min.js'
		//   }
		express: {
		    options: {
		    	port: 3000,
		      // Override defaults here
		    },
		    dev: {
		      options: {
		        script: 'app.js'
		      }
		    },
		    prod: {
		      options: {
		        script: 'app.js',
		        node_env: 'production'
		      }
		    },
		    test: {
		      options: {
		        script: 'app.js'
		      }
		    }
		},
	    less: {
	      style: {
	        files: {
	          "public/css/index.css": "less/index.less",
	          "public/css/main.css": "less/main.less",
	          "public/css/display-customer.css": "less/display-customer.less"
	        }
	      }
	    },

		watch: {
			js:{
			    files: ['public/**/*', 'node/**/*'],
			    tasks: ['console'],
			    options: {
			      spawn: false,
			      livereload: true,
			    }
			},
			css: {
		        files: ['less/*.less'],
		        tasks: ['less:style'],
		        options: {
		          livereload: true,
		        }
		    }
		}
	});

	// load npm tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-less');

	// register tasks
	grunt.registerTask('default', ['express:dev', 'watch']);
	grunt.registerTask('console', 'confirm task', function () {
		console.log("File Changed ...")
	});
};