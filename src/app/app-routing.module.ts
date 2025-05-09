import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BMIComponent } from './bmi/bmi.component';
import { CircleComponent } from './circle/circle.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

const routes: Routes =[{path:'parent',component:ParentComponent,children:[{path:'welcome',component:WelcomeComponent},
  {path:'home',component:HomeComponent},
  {path:"data-binding", component:DataBindingComponent},
  {path:'bmi',component:BMIComponent},
  {path:'calculator',component:CalculatorComponent},
{path:'rectangle',component:RectangleComponent},
{path:'circle',component:CircleComponent},
]},
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
