import * as Styled from "./LoginView.styles";
import mediaValetLogo from "../assets/images/mvlogo.png";

export const LoginView = () => {
  const handleLogin = () => {
    window.open("https://mv-visualsearchapi.azurewebsites.net/signin-oidc");
  };

  return (
    <Styled.Container>
      <Styled.Card>
        <Styled.LogoImg src={mediaValetLogo} alt="Logo" />
        <div>Get started by logging into MediaValet.</div>
        <Styled.SignInButton onClick={handleLogin}>Sign in</Styled.SignInButton>
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
