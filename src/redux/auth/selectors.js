export const getName = state => state.auth.user.name;
export const getEmail = state => state.auth.user.email;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsRefreshing = state => state.auth.isRefreshing;
export const isLoading = state => state.auth.isLoading;
