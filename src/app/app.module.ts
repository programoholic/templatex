import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { AppMaterialModule } from './core/material.module';
import { AppRoutingModule } from './core/app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TemplateManagementComponent } from './template-management/template-management.component';
import 'hammerjs';
import { AddTemplateDialogComponent } from './add-template-dialog/add-template-dialog.component';
import { FileuploadComponent } from './widget/fileupload/fileupload.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DeleteTemplateDialogComponent } from './delete-template-dialog/delete-template-dialog.component';
import { ScriptGeneratorComponent } from './script-generator/script-generator.component';
import { ResultScriptComponent } from './result-script/result-script.component';
import { HighlightModule } from 'ngx-highlightjs';
import sql from 'highlight.js/lib/languages/sql';

export function hljsLanguages() {
  return [
    {name: 'sql', func: sql},
  ];
}
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SideNavMenuComponent,
    AppBarComponent,
    LoginComponent,
    TemplateManagementComponent,
    AddTemplateDialogComponent,
    FileuploadComponent,
    LandingPageComponent,
    DeleteTemplateDialogComponent,
    ScriptGeneratorComponent,
    ResultScriptComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighlightModule.forRoot({ languages: hljsLanguages })
  ],
  entryComponents:[
    LoginComponent,
    AddTemplateDialogComponent,
    DeleteTemplateDialogComponent,
    ResultScriptComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
