import {type TypedUseSelectorHook, useSelector} from 'react-redux';
import type {RootState} from "~/services/aPiWithRedux/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector