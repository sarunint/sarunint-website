/// <reference path="../../typings/tsd.d.ts" />

module sarunint_website {
  angular
    .module('sarunint-website.widgets')
    .directive('siTopBanner', SiTopBanner);
  function SiTopBanner(): {} {
    return {
     restrict: 'E',
     templateUrl: 'templates/topBanner.html'
    }
  }
}
