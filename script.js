var myApp = angular.module('myApp', ['ngRoute'])

//ng-route config
.config(function ($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'default.html',
    })
    .when('/contact-info/:contact_index', {
      templateUrl: 'contact_info.html',
      controller: 'contactInfoCtrl'
    })

    .otherwise({redirectTo: '/home'});
})

// controllers
.controller('navCtrl', function ($scope) {
  $scope.nav = {
    navItems: ['home', 'add'],
    selectedIndex: 0,
    navClick: function ($index) {
      $scope.nav.selectedIndex = $index;
    }
  };
})

.controller('homeCtrl', function ($scope, ContactService){
  $scope.contacts = ContactService.getContacts();
})

.controller('contactInfoCtrl', function ($scope, $routeParams){
  var index = $routeParams.contact_index;
  $scope.currentContact = $scope.contacts[index];
})



// directives
.directive('contact', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'contact.html'
  }
})

// services
.factory('ContactService', [function () {
  var factory = {};

  factory.getContacts = function () {
    return contactList;
  }

  // contact list, usually would be a separate database
  var contactList = [
    {id: 0, name: 'Green Salad', calories: '200', ingredients: 'cucamber, brocoli', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/green-apples_373x.jpg'},
    {id: 1, name: 'Red meat', calories: '234', ingredients: 'red meat with sauce and potatoes', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/sloppy-joe_373x.jpg'},
    {id: 2, name: 'Chicken', calories: '167', ingredients: 'chicken with rice', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/asian-chicken-with-rice_373x.jpg'},
    {id: 3, name: 'Vegetable meatballs', calories: '94', ingredients: 'beans, corn, oats...', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/healthy-beet-juice_373x.jpg'},
    {id: 4, name: 'Meatballs', calories: '104', ingredients: 'read meat', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/meatball-appetizers_373x.jpg'},
    {id: 5, name: 'Corn', calories: '50', ingredients: 'corn, salt', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/watermelon-slice-enamel-pin-denim_373x.jpg'},
    {id: 6, name: 'Eggs', calories: '78', ingredients: 'eggs, olive oil, bread', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/pizza-muffin-popover_373x.jpg'},
    {id: 7, name: 'Kinoa', calories: '120', ingredients: 'kinoa, rice', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/spinache-quiche_373x.jpg'},
    {id: 8, name: 'Tuna', calories: '213', ingredients: 'tuna with tomatoes', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/savory-breakfast-roll_373x.jpg'},
    {id: 9, name: 'Soup', calories: '167', ingredients: 'soup with chicken and potatoes', url: 'www.google.com', img: 'https://burst.shopifycdn.com/photos/healthy-chili_373x.jpg'}
  ];

  return factory;
}]);
