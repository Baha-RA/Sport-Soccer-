import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SeviceComponent } from './components/sevice/sevice.component';
import { LogoComponent } from './components/logo/logo.component';
import { ItemsComponent } from './components/items/items.component';
import { BlogComponent } from './components/blog/blog.component';
import { VideosComponent } from './components/videos/videos.component';
import { ResultsComponent } from './components/results/results.component';
import { NewsComponent } from './components/news/news.component';
import { WordCupComponent } from './components/word-cup/word-cup.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { PlayersComponent } from './components/players/players.component';
import { OnePlayerComponent } from './components/one-player/one-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { PublicComponent } from './components/public/public.component';
import { PublicsComponent } from './components/publics/publics.component';
import { DisplayPublicComponent } from './components/display-public/display-public.component';
import { EditPublicComponent } from './components/edit-public/edit-public.component';
import { AddPublicComponent } from './components/add-public/add-public.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    SeviceComponent,
    LogoComponent,
    ItemsComponent,
    BlogComponent,
    VideosComponent,
    ResultsComponent,
    NewsComponent,
    WordCupComponent,
    BlogPageComponent,
    MatchesComponent,
    MatchComponent,
    PlayersComponent,
    OnePlayerComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddBlogComponent,
    EditPlayerComponent,
    EditMatchComponent,
    DisplayPlayerComponent,
    DisplayMatchComponent,
    DisplayUserComponent,
    EditUserComponent,
    UsersComponent,
    UserComponent,
    ReversePipe,
    PublicComponent,
    PublicsComponent,
    DisplayPublicComponent,
    EditPublicComponent,
    AddPublicComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
