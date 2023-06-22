import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroChildComponent } from './input_binding/hero-child.component';
import { HeroParentComponent } from './input_binding/hero-parent.component';
import { NameChildComponent } from './setter/name-child.component';
import { NameParentComponent } from './setter/name-parent.component';
import { VersionChildComponent } from './onChange/version-child.component';
import { VersionParentComponent } from './onChange/version-parent.component';
import { VoterComponent } from './parent_listen/voter.component';
import { VoteTakerComponent } from './parent_listen/votetaker.component';
import { CountdownLocalVarParentComponent } from './local_variable/countdown-parent.component';
import { CountdownTimerComponent } from './local_variable/countdown-timer.component';
import { CountdownViewChildParentComponent } from './view_child/countdown-parent.component';
import { AstronautComponent } from './service_inter/astronaut.component';
import { MissionControlComponent } from './service_inter/missioncontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent,
    CountdownViewChildParentComponent,
    AstronautComponent,
    MissionControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
