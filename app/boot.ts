import {UpgradeAdapter} from '@angular/upgrade';
import {TodoList} from './components/todo-list';

let adapter = new UpgradeAdapter();

angular.module('todoListWorkshopApp').directive('todoList', <angular.IDirectiveFactory>adapter.downgradeNg2Component(TodoList));

adapter.bootstrap(document.body, ['todoListWorkshopApp']);
