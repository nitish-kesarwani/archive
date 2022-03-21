import { TreeView } from "../tree/TreeView";
import TreeData from "../tree/TreeData";
import * as Styled from "./HomeView.styles";

export const HomeView = () => {
  return (
    <Styled.Wrapper>
      <Styled.WrapperLeftPanel>
        <TreeView data={TreeData} />
      </Styled.WrapperLeftPanel>
      <Styled.WrapperRightPanel></Styled.WrapperRightPanel>
    </Styled.Wrapper>
  );
};
