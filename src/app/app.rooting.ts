import { RouterModule, Routes } from "@angular/router";
import { DuoComponent } from "./duo/duo.component";
import { SoloComponent } from "./solo/solo.component";
import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
const APP_ROUTING: Routes = [
    { path: "", component: HomeComponent },
    { path: "solo", component: SoloComponent },
    { path: "duo", component: DuoComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTING);