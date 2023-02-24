import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterfacesService {

  constructor() { }

}

//INTERFACES
export interface Redes {
  name: string;
  icon: string;
  link: string;
}

export interface ProgLanguages {
  name: string;
  icon: string;
}

export interface Frameworks {
  name: string;
  icon: string;
}

export interface Software {
  name: string;
  icon: string;
}

export interface OperationSystem {
  name: string;
  icon: string;
}

export interface Database {
  name: string;
  icon: string;
}

export interface Job {
  position: string;
  company: string;
  dateStart: Date;
  dateEnd: Date;
  description: string;
}