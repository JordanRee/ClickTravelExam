import { Component } from '@angular/core';
import IDestinationsReceive from './models/destination/destination-response';
import { ClickTravelService } from './services/click-travel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Choose your dream destination...';

  public dreamDestinations: IDestinationsReceive[];

  constructor(
    private destinationService: ClickTravelService
    )
  {

  }

  ngOnInit(): void {
    this.destinationService.getDestinations().subscribe(
      result => {
        if (result) {
          this.dreamDestinations = result.filter(r => r.isDreamDestination);
        }
        else {
          console.log("No destinations found.");
        }
      },
      error => {
        throw new Error("An error as occured. ("+error+")");
      }
    )
  }
}
