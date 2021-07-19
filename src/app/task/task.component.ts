import { Component, OnInit } from '@angular/core';
import { Task } from '../models/Task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[] | any;
  inputTask: String = "";

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
    ]
  }

  toggleChecked(id: number) {
    this.tasks.map((v: any, i: any) => {

      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((v: any, i: any) => i !== id)
  }

  addTask(){
    this.tasks.push({
      content: this.inputTask,
      completed: false
    });

    this.inputTask = "";

  }

}
