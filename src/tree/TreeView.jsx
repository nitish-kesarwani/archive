import { TreeNode } from "./TreeNode";
import * as Styled from "./TreeView.styles";

export const TreeView = ({ data = [] }) => {
  console.log(data);

  if (!data || data?.length === 0) {
    return <div>No data found!</div>;
  }

  return (
    <Styled.Wrapper>
      {data?.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </Styled.Wrapper>
  );
};
