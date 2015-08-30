(function(){

  var app = angular.module('twitterClient', []);

  // config to set allow cross origin requests header
  app.config(function($httpProvider) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

  app.controller('SearchController', ['$http', function($http){
    this.query = '';
    this.tweets = [];

    var _this = this;
    this.performTweetSearch = function() {
      $http.get(
        'http://ng-tweet-search.srivishnu.totakura.in/tweets/search?query='+_this.query
      ).success(function(data){
        if(data.length != 0){
          _this.tweets = data;
        }
      });
    }
    this.order = function(predicate) {
      _this.reverse = (_this.predicate === predicate) ? !_this.reverse : false;
      _this.predicate = predicate;
    };
  }]);
})();
