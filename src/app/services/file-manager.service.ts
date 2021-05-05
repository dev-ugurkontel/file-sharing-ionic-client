import { Injectable } from '@angular/core';

export class Users {
    id: number;
    name: string;
}

const users: Users[] = [{
    id: 1,
    name: 'HD Video Player'
}, {
    id: 2,
    name: 'SuperHD Video Player'
}, {
    id: 3,
    name: 'SuperPlasma 50'
}, {
    id: 4,
    name: 'SuperLED 50'
}, {
    id: 5,
    name: 'SuperLED 42'
}, {
    id: 6,
    name: 'SuperLCD 55'
}, {
    id: 7,
    name: 'SuperLCD 42'
}, {
    id: 8,
    name: 'SuperPlasma 65'
}, {
    id: 9,
    name: 'SuperLCD 70'
}, {
    id: 10,
    name: 'DesktopLED 21'
}, {
    id: 12,
    name: 'DesktopLCD 21'
}, {
    id: 13,
    name: 'DesktopLCD 19'
}, {
    id: 14,
    name: 'Projector Plus'
}, {
    id: 15,
    name: 'Projector PlusHD'
}, {
    id: 16,
    name: 'Projector PlusHT'
}, {
    id: 17,
    name: 'ExcelRemote IR'
}, {
    id: 18,
    name: 'ExcelRemote Bluetooth'
}, {
    id: 19,
    name: 'ExcelRemote IP'
}
];

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {
    getUsers(): Users[] {
        return users;
    }
}
