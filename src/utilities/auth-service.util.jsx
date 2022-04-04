import CacheManager from "./cache-manager-util";

export const isLoggedIn = () => {
  const token = getAccessToken();
  if (token) {
    const dateTimeNow = new Date().getTime() / 1000;
    const dateTimeExpiration = new Date(token?.expiration).getTime() / 1000;
    if (dateTimeExpiration > dateTimeNow) {
      return true;
    }
  }
  return false;
};

export const getAccessToken = () => {
  return {
    token: CacheManager.getItem("access_token"),
    expiration: CacheManager.getItem("token_expiration"),
  };
};

export const setAccessToken = (token, expiresInSecond) => {
  const tokenExpiry = new Date(new Date().getTime() + expiresInSecond * 1000);
  CacheManager.setItem("access_token", token);
  CacheManager.setItem("token_expiration", tokenExpiry);
};
