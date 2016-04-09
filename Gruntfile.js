module.exports = function(grunt){
    
    // Project configuration.
    grunt.log.writeln("Configuring Gruntfile...");
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       
       concat: {
         options: {
             separator: '\n'
         },
         build: {
             files: {
                 'user.js': ['declarations.js','app/**/*.js'],
                 'vendor.js': ['node_modules/angular/angular.js', 'node_modules/angular-ui-router/release/angular-ui-router.js'],
                 'app.js': ['vendor.js', 'user.js']
             }
         }
       },

       clean: {
          build: ['build/*']
       },
       
       copy: {
           main: {
               src: ['index.html', 'app.css', 'app/**/*{.html,.css,.json}'],
               dest: 'build/'
           },
           devScripts: {
               src: ['app.js'],
               dest: 'build/'  
           },
           prodScripts: {
               src:['app.min.js'],
               dest: 'build/'
           },
           vendorLocalOnly:{
              src: [
                  /* Do not add these in production */
                  'server.js',
                  'node_modules/connect/**/*',
                  'node_modules/serve-static/**/*'
              ],
              dest: 'build/'
           }
       },
       
       uglify: {
           options: {
               banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
               mangle: false
           },
           buildApp: {
               src: 'app.js',
               dest: 'app.min.js'
           }
       },
       
       sass: {
            dist: {
               files: {
                  'app.css': 'app/styles/app.scss'
               }
            } 
       },
       
       qunit: {
           files: ['test/**/*.html']
       },
       
       jshint: {
           files: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js'],
           options: {
               globals:{
                   jQuery: true,
                   console: true,
                   module: true,
                   document: true
               }
           }
       },
       
       watch: {
          files: ['index.html', '<%= jshint.files %>', 'vendor/**/*.js', 'app/**/*.scss'],
          tasks: ['clean:build', 'sass', 'copy:main', 'jshint', 'concat', 'uglify:buildApp', 'copy:devScripts']
       }
    });
    
    // Load the plugins that provide the required tasks.
    grunt.log.writeln("Loading NPM tasks...");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    // Default task(s)
    grunt.log.writeln("Registering default Grunt task...");
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
    
    grunt.registerTask('update-vendor', ['clean:vendor', 'copy:vendor']);
    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('testcopy', ['clean:build', 'copy:main']);
    grunt.registerTask('localBuild', ['clean:build', 'copy:main', 'jshint', 'concat', 'uglify', 'copy:vendorLocalOnly']);
    
    // Done!
    grunt.log.writeln("Gruntfile operations completed.");
};