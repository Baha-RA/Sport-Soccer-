import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddPublicComponent } from './components/add-public/add-public.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayPublicComponent } from './components/display-public/display-public.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditPublicComponent } from './components/edit-public/edit-public.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { PublicsComponent } from './components/publics/publics.component';
import { SeviceComponent } from './components/sevice/sevice.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path: 'sevice', component:SeviceComponent},
  {path: 'blog', component:BlogPageComponent},
  {path: 'matches', component:MatchesComponent},
  {path: 'users', component:UsersComponent},
  {path: 'publics', component:PublicsComponent},
  {path:'Players', component:PlayersComponent},
  {path:'Admin', component:AdminComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'addmatch',component:AddMatchComponent},
  {path:'addplayer',component:AddPlayerComponent},
  {path:'addpublic',component:AddPublicComponent},
  {path:'addBlog',component:AddBlogComponent},
  {path:'editplayer/:id',component:EditPlayerComponent},
  {path:'editmatch/:id',component:EditMatchComponent},
  {path:'edituser/:id',component:EditUserComponent},
  {path:'editpublic/:id',component:EditPublicComponent},
  {path:'display-user/:id',component:DisplayUserComponent},
  {path:'display-player/:id',component:DisplayPlayerComponent},
  {path:'display-public/:id',component:DisplayPublicComponent}, // id de facon dynamique (get)
  {path:'display-match/:id',component:DisplayMatchComponent} // id de facon dynamique (get)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
