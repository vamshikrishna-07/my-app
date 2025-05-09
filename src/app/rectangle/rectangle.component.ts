import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

  num1:number=0;
  num2:number=0;
  sum:number=0;
  area(){this.sum=this.num1*this.num2;}
  perimeter(){this.sum=2*this.num1+2*this.num2};
}
