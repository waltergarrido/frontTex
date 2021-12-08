import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ClienteService } from './api/cliente.service';
import { EmpleadoService } from './api/empleado.service';
import { EstadoService } from './api/estado.service';
import { OperarioService } from './api/operario.service';
import { OrdenService } from './api/orden.service';
import { OtiService } from './api/oti.service';
import { RoscaService } from './api/rosca.service';
import { SectorService } from './api/sector.service';
import { SupervisorService } from './api/supervisor.service';
import { TareaService } from './api/tarea.service';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: [
        ClienteService,
        EmpleadoService,
        EstadoService,
        OperarioService,
        OrdenService,
        OtiService,
        RoscaService,
        SectorService,
        SupervisorService,
        TareaService]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    }

    constructor(@Optional() @SkipSelf() parentModule: ApiModule,
        @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
