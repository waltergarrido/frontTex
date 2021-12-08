/**
 * My API
 * Documentation automatically generated by the <b>swagger-autogen</b> module.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { Orden } from '../model/orden';
import { Ordenes } from '../model/ordenes';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';


@Injectable()
export class OrdenService {

    protected basePath = 'http://localhost:8081';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * Endpoint para crear orden de produccion.
     * @param orden datos para crear una orden
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ordenCrearOrdenProduccionPost(orden: Orden, observe?: 'body', reportProgress?: boolean): Observable<Orden>;
    public ordenCrearOrdenProduccionPost(orden: Orden, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Orden>>;
    public ordenCrearOrdenProduccionPost(orden: Orden, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Orden>>;
    public ordenCrearOrdenProduccionPost(orden: Orden, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (orden === null || orden === undefined) {
            throw new Error('Required parameter orden was null or undefined when calling ordenCrearOrdenProduccionPost.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Orden>(`${this.basePath}/orden/crearOrdenProduccion`,
            orden,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Endpoint para obtener todas las ordenes
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ordenGet(observe?: 'body', reportProgress?: boolean): Observable<Ordenes>;
    public ordenGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Ordenes>>;
    public ordenGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Ordenes>>;
    public ordenGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Ordenes>(`${this.basePath}/orden/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Endpoint para obtener una orden.
     * @param id orden ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ordenIdGet(id: string, observe?: 'body', reportProgress?: boolean): Observable<Orden>;
    public ordenIdGet(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Orden>>;
    public ordenIdGet(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Orden>>;
    public ordenIdGet(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ordenIdGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<Orden>(`${this.basePath}/orden/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Endpoint para modificar orden.
     * @param id orden ID
     * @param orden datos para modificar una orden
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ordenIdPatch(id: string, orden: Orden, observe?: 'body', reportProgress?: boolean): Observable<Orden>;
    public ordenIdPatch(id: string, orden: Orden, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Orden>>;
    public ordenIdPatch(id: string, orden: Orden, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Orden>>;
    public ordenIdPatch(id: string, orden: Orden, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ordenIdPatch.');
        }

        if (orden === null || orden === undefined) {
            throw new Error('Required parameter orden was null or undefined when calling ordenIdPatch.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.patch<Orden>(`${this.basePath}/orden/${encodeURIComponent(String(id))}`,
            orden,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
