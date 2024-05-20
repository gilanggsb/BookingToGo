import { rootStore } from "@states/redux";
import { rootReducer } from "@states/redux/rootReducer";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch;


export interface PaymentGuestDataState {
    guests: IGuest[];
}
