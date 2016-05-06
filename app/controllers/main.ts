
'use strict';

angular.module('todoListWorkshopApp')
  .controller('MainCtrl', function($scope: any, todosService: any) {
    $scope.todos = todosService.getTodos();

    $scope.add = function(value: string) {
      todosService.addTodo(value);
      $scope.newItem = '';
    };
  });
