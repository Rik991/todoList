import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { iTodo } from '../../interfaces/i-todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  todos: iTodo[] = [];

  ngOnInit() {
    this.todos = this.todoSvc.getTodoWithUsers(this.userSvc.users);
    console.log(this.todos);
  }

  activatedTask(task: iTodo) {
    this.todoSvc.taskCompleted(task);
  }
}
