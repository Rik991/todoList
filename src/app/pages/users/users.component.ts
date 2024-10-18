import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { iUser } from '../../interfaces/i-user';
import { iTodo } from '../../interfaces/i-todo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: iUser[] = [];
  todos: iTodo[] = [];

  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  ngOnInit() {
    this.users = this.userSvc.users;
    this.todos = this.todoSvc.todos;
  }

  getUserTodos(userId: number): iTodo[] {
    return this.todos.filter((todo) => todo.userId === userId);
  }
}
