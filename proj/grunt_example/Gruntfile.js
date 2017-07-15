module.exports = function(grunt) {

  grunt.initConfig({
    cssmin:{
      options:{
        keepSpecialComments:0
      },
      compress:{
        files:{
          'css-min/main-min.css':[
          "css/*.css"]
        }
      }
    },
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']);

};