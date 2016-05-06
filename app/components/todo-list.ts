import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `<ul>
    <li *ngFor="let todo of todos">{{todo}}</li>
  </ul>`
})
export class TodoList {
  @Input() todos;
}
