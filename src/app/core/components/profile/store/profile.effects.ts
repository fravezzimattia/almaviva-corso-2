import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ProfileService } from "src/app/core/services/profile.service";
import { getProfile, getProfileError, getProfileSuccess } from "./profile.actions";


@Injectable()
export class ProfileEffects {

    constructor(
        private actions$: Actions,
        private profileService: ProfileService
    ) { }


    effectProfile$ = createEffect(() => 
        this.actions$.pipe(
            ofType(getProfile),
            switchMap((action: { id: number }) => {
                return this.profileService.getProfile(action.id)
                    .pipe(
                        map((user: any) => getProfileSuccess({ user })),
                        catchError(error => of(getProfileError()))
                    )

            })
        )
    )
}