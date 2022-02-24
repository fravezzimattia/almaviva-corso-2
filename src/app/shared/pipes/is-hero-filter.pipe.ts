import { Pipe, PipeTransform } from '@angular/core';
import { HeroDto } from 'src/app/features/hero-page/models/hero-dto.model';

@Pipe({
  name: 'isHeroFilter'
})
export class IsHeroFilterPipe implements PipeTransform {
  transform(allHeros: HeroDto[] | null): HeroDto[] {
    return !!allHeros
      ? allHeros.filter(hero => !!hero.ability)
      : [];
  }
}
