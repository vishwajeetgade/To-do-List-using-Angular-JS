import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localItem: string;
  constructor() {
    this.localItem = localStorage.getItem("todos") || "[]";
    if(this.localItem == null){
      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  ngOnInit(): void {
  }

  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].isactive = !this.todos[index].isactive
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
