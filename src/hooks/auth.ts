import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD:src/redux/hooks.ts

import type { RootState, AppDispatch } from "./configureStore";

=======

import type { RootState, AppDispatch } from "@redux/configureStore";

>>>>>>> 36b8dc78557567efe0aab11868b93a4b80a44361:src/hooks/auth.ts
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
