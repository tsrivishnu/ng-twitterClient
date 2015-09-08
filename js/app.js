(function(){

  var app = angular.module('twitterClient', ['ngRoute']);

  // config to set allow cross origin requests header
  app.config(function($httpProvider,$routeProvider) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];

      // define the routes
      $routeProvider
      .when('/',{
        templateUrl:'templates/search.html',
        controller: 'SearchController'
      })
      .when('/info',{
        templateUrl:'templates/userinfo.html',
        controller: 'UserInfoController'
      });
  });

  //search controller
  app.controller('SearchController', ['$http','handledata','$location','$route', function($http,handledata,$location,$route){
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

    this.getInfo=function(screenname){
      handledata.setName(screenname);
        $location.path('/info');
        $route.reload();    
    };
    

    

  }]);

  //userinfo controller
  app.controller('UserInfoController',['$http','handledata','$scope',function($http,handledata,$scope){
      $scope.userInfo={};
      //get user data
      $http.get(
        'https://angular-tweet-search.herokuapp.com/user/details?screen_name='+handledata.getName()
      ).success(function(data){
        $scope.userInfo=data;
      });

  }]);

  //Data Exchange Service
  app.service('handledata', function() {
      this.handlename = "";
      this.setName=function(name){
        this.handlename=name;
      };
      this.getName=function(){
        return this.handlename;  
      };
    });

})();
