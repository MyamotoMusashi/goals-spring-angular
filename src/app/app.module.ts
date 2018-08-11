import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RequestsComponent } from './requests/requests.component';

import { RequestsService } from './requests.service';
import { RequestComponent } from './request/request.component';
import { AddRequestComponent } from './add-request/add-request.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NagivationComponent } from './nagivation/nagivation.component';
import { TaskComponent } from './task/task.component';

const ROUTES = [
  {
    path: 'requests',
    component: RequestsComponent
  },
  {
    path: 'requests/add',
    component: AddRequestComponent
  },
  {
    path: 'requests/:id',
    component: RequestComponent
  },
  {
    path: 'requests/:id/edit',
    component: EditRequestComponent
  },
  {
    path: 'requests/:requestID/tasks/add',
    component: AddTaskComponent
  },
  {
    path: 'requests/:requestID/tasks/:taskID',
    component: TaskComponent
  },
  {
    path: '',
    redirectTo: 'requests',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    RequestComponent,
    AddRequestComponent,
    AddTaskComponent,
    EditRequestComponent,
    EditTaskComponent,
    NagivationComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
