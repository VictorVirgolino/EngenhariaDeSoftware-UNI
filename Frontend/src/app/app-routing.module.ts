import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/pages/login/login.component';
import { RegisterComponent } from '../app/pages/register/register.component';
import { TeamComponent } from '../app/pages/team/team.component';
import { Error404Component } from '../app/components/error404/error404.component';
import { ForgotPasswordComponent } from '../app/pages/forgot-password/forgot-password.component';
import { HomeComponent } from '../app/pages/home/home.component';
import { EvaluationComponent } from '../app/pages/evaluation/evaluation.component';
import { NoteComponent } from '../app/pages/note/note.component';
import { ProfileComponent } from '../app/pages/profile/profile.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminVoteComponent } from './pages/admin-vote/admin-vote.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'team', component: TeamComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'evaluation', component: EvaluationComponent },
  { path: 'note/:id', component: NoteComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-vote', component: AdminVoteComponent },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
