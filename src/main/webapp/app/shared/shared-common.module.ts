import { NgModule } from '@angular/core';

import { DashSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DashSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DashSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DashSharedCommonModule {}
