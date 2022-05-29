/// <reference types="@types/google.maps" />
import { Company } from './Company';
import { User } from './User';

const user = new User();
const company = new Company();

new google.maps.Map(document.getElementById('map'), {
  zoom: 13,
  center: user.location,
});
