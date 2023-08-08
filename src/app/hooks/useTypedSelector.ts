import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/reducers';

// This hook is used to get the state of the store
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
