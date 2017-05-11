import { Injectable } from '@angular/core';
import {ILogro} from '../home/home.component';
@Injectable()
export class LogrosService {
logros :ILogro[];
  constructor() { 
this.logros=[{
	id:1,
	title:"esto es nuevo",
	description:"odod establece una serie de nuevos elementos y atributos"
	},{
	id:2,
	title:"esto es nuevo ",
	description:"HTML5 establece una serie de nuevos elementos y atributos q."
	},{
	id:3,
	title:"esto es nuevo y megor",
	description:"variantes de sintaxis para HTML: una «clásica», ."
	}];

  }
find(id:number):ILogro{
	return this.logros.find((logro)=> logro.id==id);
}


all(): ILogro[]{
	return this.logros;
}
 } 