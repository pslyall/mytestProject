import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  constructor() { }


cars =
['nisaan','audi','mercedes','bently'];
myData()
{
  return  'This is my test data';
}

}
