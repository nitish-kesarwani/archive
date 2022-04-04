import * as Styled from "./LoginView.styles";
import mediaValetLogo from "../assets/images/mvlogo.png";
import { isLoggedIn, setAccessToken } from "../utilities/auth-service.util";
import { useLocation, useNavigate } from "react-router-dom";
import { RouteConstant } from "../constants";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { BiLoaderCircle } from "react-icons/bi";

export const LoginView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const prevCode = useRef();
  const {
    REACT_APP_OIDC_REDIRECT_URI,
    REACT_APP_CLIENT_ID,
    REACT_APP_CLIENT_SECRET,
    REACT_APP_BACKEND_URL,
    REACT_APP_URI,
  } = process.env;

  const [loading, setLoading] = useState(false);

  const getToken = () => {
    const formData = new FormData();
    formData.append("grant_type", "authorization_code");
    formData.append("code", code);
    formData.append("redirect_uri", REACT_APP_OIDC_REDIRECT_URI);
    formData.append("client_id", REACT_APP_CLIENT_ID);
    formData.append("client_secret", REACT_APP_CLIENT_SECRET);
    axios
      .post(`${REACT_APP_URI}/connect/token`, formData)
      .then((res) => {
        const { access_token, expires_in } = res?.data;
        if (access_token && expires_in) {
          setAccessToken(access_token, expires_in);
          navigate(RouteConstant.home);
        } else {
          setLoading(false);
          alert("Token not found!!");
        }
      })
      .catch((err) => {
        console.log({ err });
        setLoading(false);
        alert("There is some error!! Please try again");
      });
  };

  const getAccessToken = useCallback(getToken, [
    REACT_APP_CLIENT_ID,
    REACT_APP_CLIENT_SECRET,
    REACT_APP_OIDC_REDIRECT_URI,
    REACT_APP_URI,
    code,
    navigate,
  ]);

  useEffect(() => {
    if (code && code !== prevCode.current) {
      prevCode.current = code;
      setLoading(true);
      getAccessToken();
    }
  }, [getAccessToken, code]);

  const handleLogin = () => {
    setLoading(true);
    const url = `${REACT_APP_BACKEND_URL}/oauth/redirect`;
    axios({
      method: "GET",
      url: `${url}`,
      headers: {
        Accept: "application/json",
      },
    }).then((res) => {
      const response = res?.data;
      if (response) {
        window.location.href = response.auth_redirect_url;
      } else {
        setLoading(false);
        alert("Login failed");
      }
    });
  };

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(RouteConstant.home);
    }
  }, [navigate]);

  return (
    <Styled.Container>
      <Styled.Card>
        <Styled.LogoImg src={mediaValetLogo} alt="Logo" />
        <div>Get started by logging into MediaValet.</div>
        <Styled.SignInButton onClick={handleLogin}>
          {loading && <BiLoaderCircle className="loader" size="22" />}
          <span>{loading ? "Loading..." : "Sign in"}</span>
        </Styled.SignInButton>
        <div variant="smallText">
          Don&#39;t have a MediaValet account?&nbsp;
          <a
            href="https://www.mediavalet.com/product-tour/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Learn more About MediaValet
          </a>
        </div>
      </Styled.Card>
    </Styled.Container>
  );
};
