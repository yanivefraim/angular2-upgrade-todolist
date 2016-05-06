import {UpgradeAdapter} from '@angular/upgrade';

const adapter = new UpgradeAdapter();

adapter.bootstrap(document.body, ['todoListWorkshopApp']);
