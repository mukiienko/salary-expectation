const isLoadingSelector = (state) => (
  state.account.isLogged === null ||
  state.account.profile.loading ||
  state.account.logout.loading
);

export {
  isLoadingSelector,
}
