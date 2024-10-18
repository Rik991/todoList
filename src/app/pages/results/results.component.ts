import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { iTodo } from '../../interfaces/i-todo';
import { iUser } from '../../interfaces/i-user';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  searchQuery: string = '';
  filteredTodos: iTodo[] = [];

  constructor(
    private route: ActivatedRoute,
    private todoSvc: TodoService,
    private userSvc: UserService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['query'] || '';
      this.filterTodos();
    });
  }

  filterTodos() {
    if (this.searchQuery) {
      const userSearched = this.userSvc.users.filter((user: iUser) =>
        user.firstName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      const searchUserById = userSearched.map((user) => user.id);

      this.filteredTodos = this.todoSvc.todos.filter((todo: iTodo) =>
        searchUserById.includes(todo.userId)
      );
    }
  }
}
