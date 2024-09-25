import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dropdown-overlay-options-test',
    templateUrl: './dropdown-overlay-options-test.html'
})
export class DropdownOverlayOptionsTest implements OnInit {
    cities: City[];

    selectedCity: City;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}