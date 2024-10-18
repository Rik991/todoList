import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { iTodo } from '../../interfaces/i-todo';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  completeTodo: iTodo[] = [];

  ngOnInit() {
    this.completeTodo = this.todoSvc
      .getTodoWithUsers(this.userSvc.users)
      .filter((t) => t.completed);
  }
}
