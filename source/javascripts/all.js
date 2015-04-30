//= require angular
//= require jquery
//= require bootstrap-sass
/// <reference path="../typings/tsd.d.ts" />
var sarunint_website;
(function (sarunint_website) {
    angular
        .module('sarunint-website', ['sarunint-website.widgets']);
})(sarunint_website || (sarunint_website = {}));
/// <reference path="../../typings/tsd.d.ts" />
var sarunint_website;
(function (sarunint_website) {
    angular
        .module('sarunint-website.widgets', []);
})(sarunint_website || (sarunint_website = {}));
/// <reference path="../../typings/tsd.d.ts" />
var sarunint_website;
(function (sarunint_website) {
    angular
        .module('sarunint-website.widgets')
        .directive('siTopBanner', SiTopBanner);
    function SiTopBanner() {
        return {
            restrict: 'E',
            templateUrl: 'templates/topBanner.html'
        };
    }
})(sarunint_website || (sarunint_website = {}));
/// <reference path="../typings/tsd.d.ts" />
/// <reference path="sarunint-website.ts" />
/// <reference path="widgets/sarunint-website.widgets.ts" />
/// <reference path="widgets/sarunint-website.widgets.topBanner.ts" />
