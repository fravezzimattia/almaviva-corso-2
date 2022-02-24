import { Type } from "@angular/core";
import { AdsComponent } from "src/app/shared/components/ads/interfaces/ads.component";

export class AdItem {
    constructor(
        public component: Type<AdsComponent>,
        public data: any
    ) { }
}