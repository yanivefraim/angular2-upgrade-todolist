import {UpgradeAdapter} from '@angular/upgrade';

const adapter = new UpgradeAdapter();

adapter.bootstrap(document.body, ['todoListWorkshopApp']);
//import {bootstrap}    from '@angular/platform-browser-dynamic';
//import {AppComponent} from './app.component';

//bootstrap(AppComponent);
