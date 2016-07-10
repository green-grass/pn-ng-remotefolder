(function () {

    'use strict';

    var module = angular.module('pnRemotefolder', []);

    module.directive('pnRemotefolder', function () {
        var link = function (scope, element, attrs) {
            var options = {
                listUrl: scope.listUrl,
                uploadUrl: scope.uploadUrl,
                renameUrl: scope.renameUrl,
                deleteUrl: scope.deleteUrl,
                multiple: scope.multiple() === false ? false : true,
                predefinedFileNames: scope.predefinedFileNames()
            };
            var remoteFolder = new PN.Components.RemoteFolder(element, options);
            element.data("remoteFolder", remoteFolder);
        };

        return {
            restrict: 'EA',
            scope: {
                listUrl: '@',
                uploadUrl: '@',
                renameUrl: '@',
                deleteUrl: '@',
                multiple: '&',
                predefinedFileNames: '&'
            },
            link: link
        };
    });

})();
