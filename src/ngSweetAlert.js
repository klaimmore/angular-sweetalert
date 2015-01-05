;(function(global, angular) {
    'use strict';

    var sweet = angular.module('hSweetAlert', []);

    var al = global.swal;

    var service = function($rootScope) {

        this.show = function() {
            var args = [].slice.call(arguments, 0);
            if (typeof args[0] === 'object' && typeof args[1] === 'function') {
                var doneFunc = args[1];
                args[1] = function() {
                    doneFunc.apply(this, arguments);
                    $rootScope.$apply();
                };
            }
            al.apply(undefined, args);
        };
    };

    sweet.service('sweet', ['$rootScope', service]);

}(window, angular));