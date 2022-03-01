import { ActionReducerMap } from "@ngrx/store";
import { profileReducer, ProfileState } from "../components/profile/store/profile.reducers";


export interface AppState {
    profile: ProfileState
}

export const reducers: ActionReducerMap<AppState> = {
    profile: profileReducer
}