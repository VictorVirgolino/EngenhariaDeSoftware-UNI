import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { LoginComponent } from './pages/login/login.component';
import { TeamComponent } from './pages/team/team.component';
import { RegisterComponent } from './pages/register/register.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/loading/loading.component';
import { ForgotPasswordComponent } from '../app/pages/forgot-password/forgot-password.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';
import { NoteComponent } from './pages/note/note.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminVoteComponent } from './pages/admin-vote/admin-vote.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    LoginComponent,
    TeamComponent,
    RegisterComponent,
    Error404Component,
    HomeComponent,
    LoadingComponent,
    ForgotPasswordComponent,
    EvaluationComponent,
    ProfileComponent,
    NoteComponent,
    AdminComponent,
    AdminVoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AvatarModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      maxOpened: 3,
      preventDuplicates: true,
    }),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
