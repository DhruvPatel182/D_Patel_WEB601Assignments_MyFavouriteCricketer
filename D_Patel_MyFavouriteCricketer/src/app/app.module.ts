import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { PlayerTypeEditPipe } from './player-type-edit.pipe';
import { HoverAffectDirective } from './hover-affect.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    PlayerTypeEditPipe,
    HoverAffectDirective

 ],exports:[ 
   HoverAffectDirective
            ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
