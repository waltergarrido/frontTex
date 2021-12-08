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

import { Operario } from '../model/operario';
import { Operarios } from '../model/operarios';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';


@Injectable()
export class OperarioService {

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
     * Endpoint para obtener todos los operarios.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public operarioGet(observe?: 'body', reportProgress?: boolean): Observable<Operarios>;
    public operarioGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Operarios>>;
    public operarioGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Operarios>>;
    public operarioGet(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

        return this.httpClient.get<Operarios>(`${this.basePath}/operario/`,
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
     * Endpoint para obtener las tareas.
     * @param id Operario ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public operarioIdGet(id: string, observe?: 'body', reportProgress?: boolean): Observable<Operario>;
    public operarioIdGet(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Operario>>;
    public operarioIdGet(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Operario>>;
    public operarioIdGet(id: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling operarioIdGet.');
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

        return this.httpClient.get<Operario>(`${this.basePath}/operario/${encodeURIComponent(String(id))}`,
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
     * Endpoint para obtener los operarios de un sector.
     * @param nombreSector 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public operarioOperarioSectorNombreSectorGet(nombreSector: string, observe?: 'body', reportProgress?: boolean): Observable<Operarios>;
    public operarioOperarioSectorNombreSectorGet(nombreSector: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Operarios>>;
    public operarioOperarioSectorNombreSectorGet(nombreSector: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Operarios>>;
    public operarioOperarioSectorNombreSectorGet(nombreSector: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (nombreSector === null || nombreSector === undefined) {
            throw new Error('Required parameter nombreSector was null or undefined when calling operarioOperarioSectorNombreSectorGet.');
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

        return this.httpClient.get<Operarios>(`${this.basePath}/operario/operarioSector/${encodeURIComponent(String(nombreSector))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}