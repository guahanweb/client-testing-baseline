module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: []
            },
            files: [
                'src/**/*.js'
            ]
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    /* Add your files here */
                }
            }
        },

        exec: {
            webdriver: {
                cmd: function (opt) {
                    opt = opt || 'start';
                    if (opt === 'update') {
                        return './node_modules/protractor/bin/webdriver-manager update'
                    } else {
                        return './node_modules/protractor/bin/webdriver-manager start'
                    }
                }
            },

            unit: {
                cmd: function () {
                    var cmd = './node_modules/karma/bin/karma start ';
                    var file = './tst/conf/karma.js';

                    if (grunt.file.exists(file)) {
                        return cmd + file;
                    }

                    grunt.log.error('Requested config file does not exist: ' + file);
                    return 'exit 1';
                }
            },

            e2e: {
                cmd: function (browser) {
                    browser = browser || 'chrome';
                    var cmd = './node_modules/protractor/bin/protractor ';
                    var file = './tst/conf/protractor.' + browser + '.js';

                    if (grunt.file.exists(file)) {
                        return cmd + file;
                    }

                    grunt.log.error('Requested config file does not exist: ' + file);
                    return 'exit 1';
                }
            }
        },

        jsdoc: {
            dist: {
                src: ['./docs/README.md'],
                options: {
                    destination: 'docs',
                    configure: 'conf/jsdoc.json'
                }
            }
        }
    });

    /** Include Task Runners **/
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-jsdoc');

    /** Testing Tasks **/
    grunt.registerTask('test:unit', ['exec:unit']);
    grunt.registerTask('test:e2e', ['exec:e2e']);
    grunt.registerTask('test', ['test:unit', 'test:e2e']);

    /** Webdriver **/
    grunt.registerTask('webdriver:update', ['exec:webdriver:update']);
    grunt.registerTask('webdriver', ['exec:webdriver:start']);

    /** Build Scripts **/
    grunt.registerTask('build', ['jshint', 'uglify']);

    /** Default **/
    grunt.registerTask('default', ['jshint', 'test']);
};
