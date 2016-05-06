
'use strict';

angular.module('todoListWorkshopApp')
  .controller('MainCtrl', function($scope: any, todosService: any) {

    $scope.add = function(value: string) {
      todosService.addTodo(value);
      $scope.newItem = '';
    };
  });
