import { Company } from './Company';
import { User } from './User';

export class CustomMap {
  public googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: User | Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });
  }
}
