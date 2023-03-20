import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

const materialModules = [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
]

@NgModule({
    imports: materialModules,
    exports: materialModules,
    declarations: []
  })
  export class AngularMaterialModule { }