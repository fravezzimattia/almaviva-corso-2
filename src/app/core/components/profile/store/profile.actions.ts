import { createAction, props } from "@ngrx/store";

export const getProfile = createAction(
    '[Profile] Get',
    props<{ id: number }>()
)

export const getProfileSuccess = createAction(
    '[Profile] Get Success',
    props<{ user: any }>()
)

export const getProfileError = createAction(
    '[Profile] Get Error'
)
