import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from "src/app/Todo";

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo = {
    title: "",
    desc: "",
    isactive: true
  }

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoToggle: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
  }

  onClickCheckBox(todo: Todo){
    this.todoToggle.emit(todo);
  }
}
