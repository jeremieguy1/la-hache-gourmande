import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(req).pipe(   
      map(ev => {
        console.log("Event :" + ev);
        let header: HttpHeaders = req.headers;
        header.append('Content-Security-Policy', 'self');
        const request: HttpRequest<any> = req.clone({headers: header})
        return next.handle(request);
      }) 
    )};

  constructor() { }
}
