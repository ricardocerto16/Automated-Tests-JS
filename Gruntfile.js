module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), // the package file to use


    qunit: {
      
      all: ['tests/*.html'],
      
    },

    watch: {
    files: ['tests/*.js', 'tests/*.html', 'src/*.js'],
    tasks: ['qunit']

  }
});
  
  // load up your plugins
 
  // register one or more task lists (you should ALWAYS have a "default" task list)

   grunt.loadNpmTasks('grunt-contrib-qunit');
   grunt.loadNpmTasks('grunt-contrib-watch');

// ...

   grunt.registerTask('default', ['qunit']);
   
   
};