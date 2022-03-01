import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/core/store/store.config";
import { ProfileState } from "./profile.reducers";

export const getProfileState = (state: AppState) => state.profile;

export const getDisplayName = createSelector(
    getProfileState,
    (state:ProfileState) => {
        return !! state.user
        ? `Ciao ${state.user.nome}!`
        : `No logged user`;
    }
)