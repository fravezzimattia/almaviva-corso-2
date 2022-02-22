import { Injectable } from "@angular/core";
import { HeroDto } from "../models/hero-dto.model";

@Injectable()
export class HeroStore {
    private heroes: HeroDto[] = [];

    public init(res: HeroDto[]) {
        this.heroes = res;
    }
    public get() {
        return this.heroes;
    }
}