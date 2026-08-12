import { Component } from '@angular/core';
import { Sidebar } from "../shared/components/sidebar/sidebar";
import { RouterOutlet } from "../../../node_modules/@angular/router/types/_router_module-chunk";

@Component({
  selector: 'app-layout',
  imports: [Sidebar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
