(function(){

  var app = angular.module('twitterClient', []);

  app.controller('SearchController', function(){
    this.query = '';
    this.tweets = sampleTweets;
  });

  var sampleTweets = [
    {
      user: {
        name: "Vishnu",
        profile_image_url: 'http://1.gravatar.com/avatar/bcade31197a5623384d853c3c5fac28a',
        screen_name: '@vishnu',
      },
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    },
    {
      user: {
        name: "Shiguru",
        profile_image_url: 'http://1.gravatar.com/avatar/bcade31197a5623384d853c3c5fac28a',
        screen_name: '@guru',
      },
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    }
  ]

})();
