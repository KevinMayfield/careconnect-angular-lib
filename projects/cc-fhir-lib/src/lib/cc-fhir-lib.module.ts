import { NgModule } from '@angular/core';
import { CcFhirLibComponent } from './cc-fhir-lib.component';
import {FhirService} from './service/fhir.service';
import {LinksService} from './service/links.service';
import {Oauth2Service} from './service/oauth2.service';
import {BundleService} from './service/bundle.service';
import {EprService} from './service/epr.service';
import {AuthService} from './service/auth.service';

@NgModule({
  imports: [
  ],
  declarations: [CcFhirLibComponent],
  exports: [CcFhirLibComponent]
})
export class CcFhirLibModule {
    static forRoot() {
        return {
            ngModule: CcFhirLibModule,
            providers: [
                FhirService
                , AuthService
                , LinksService
                , EprService

                , Oauth2Service
                , BundleService
            ]
        }
    }
}
