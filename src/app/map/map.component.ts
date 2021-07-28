import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lat = 35.821430;
  long = 10.634422;
  googleMapType = 'satellite';

  onChooseLocation(event:any){
    console.log(event);
  }
}
