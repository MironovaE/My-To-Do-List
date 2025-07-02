import { useDispatch } from 'react-redux';
import type {AppDispatch} from "~/services/aPiWithRedux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();