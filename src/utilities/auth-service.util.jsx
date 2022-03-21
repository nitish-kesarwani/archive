export const isLoggedIn = () => {
  return getAccessToken() ? true : false;
};

export const getAccessToken = () => {
  return true;
};
