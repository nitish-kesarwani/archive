import { TreeView } from "../tree/TreeView";
import TreeData from "../tree/TreeData";
import * as Styled from "./HomeView.styles";
import { BsPower } from "react-icons/bs";
import CacheManager from "../utilities/cache-manager-util";
import { useNavigate } from "react-router-dom";
import { RouteConstant } from "../constants";

export const HomeView = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    CacheManager.clear();
    navigate(RouteConstant.login);
  };

  return (
    <Styled.Wrapper>
      <Styled.WrapperLeftPanel>
        <TreeView data={TreeData} />
      </Styled.WrapperLeftPanel>
      <Styled.WrapperRightPanel>
        <Styled.TopBar>
          <BsPower onClick={handleLogout} size={25} title="Logout" />
        </Styled.TopBar>
      </Styled.WrapperRightPanel>
    </Styled.Wrapper>
  );
};
