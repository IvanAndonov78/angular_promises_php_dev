import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  public getFruitsData() {
    return fetch('http://localhost:8000/fruits')
        .then(function(response) {
            console.log('Fruits: ....');
            console.log(response);
            return response.json();
        });
  }

  public getVegetablesData() {

      var url = 'http://localhost:8000/vegetables';

      let promise = new Promise(function(resolve, reject) {

          let req = new XMLHttpRequest();				
          req.responseType = 'json';
          req.open("POST", url, true);
          req.onload = function() { 
              resolve(req.response)
          }; 
          req.onerror = function() { 
              reject(req.statusText);
          }; 
          req.send();
      });

      promise.then(function(response){
            console.log('Vegetables: ....');
            console.log(response);
          return response;
      });

      return promise;
  }

  public getFlowersData(): any {

      var url = 'http://localhost:8000/flowers';

      let promise = new Promise(function(resolve, reject) {

          let req = new XMLHttpRequest();				
          req.responseType = 'json';
          req.open("POST", url, true);
          req.onload = function() { 
              resolve(req.response)
          }; 
          req.onerror = function() { 
              reject(req.statusText);
          }; 
          req.send();
      });

      promise.then(function(response){
          console.log('Flowers: ....');
          console.log(response);
      });

      return promise;

  }

  public getNutsData(): Promise<string> {
    var url = 'http://localhost:8000/nuts';
    let promise = new Promise<string>((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.responseType = 'json';
        req.open('POST', url, true);
        req.onload = () => {
            resolve(req.response)
        };
        req.onerror = () => {
            reject(req.statusText);
        };
        req.send();
    });
    promise.then((response) => {
        console.log('Nuts: ....');
        console.log(response);
    })
    return promise;
  }


}
