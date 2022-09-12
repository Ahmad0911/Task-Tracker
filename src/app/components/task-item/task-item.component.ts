import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { TASKS } from "src/app/similar";
import { Task } from "src/app/Task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task : Task |any;
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

@Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
 onDelete(task: any) {
  this.onDeleteTask.emit(task);
 }

 onToggle(task: any) {
  this.onToggleReminder.emit(task);
 }
}
