import { Component } from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent {
   path: string = "../../../../assets/images/"

   imgEmpty = `${this.path}/empty/empty-item.png` 
}
