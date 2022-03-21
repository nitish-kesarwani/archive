import { TreeView } from "./TreeView";
import * as Styled from "./TreeView.styles";
import { FcFolder } from "react-icons/fc";
import { GoFileCode } from "react-icons/go";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { useState } from "react";

export const TreeNode = ({ node }) => {
  const [childVisible, setChildVisibility] = useState(false);
  const hasChild = node?.children?.length > 0 ? true : false;

  return (
    <li>
      <Styled.TextWrapper onClick={(e) => setChildVisibility((v) => !v)}>
        {hasChild && (
          <>
            {!childVisible && <BsChevronRight size="12" />}
            {childVisible && <BsChevronDown size="12" />}
            <FcFolder size="20" />
          </>
        )}
        {!hasChild && <GoFileCode />}
        <Styled.Text>{node.name}</Styled.Text>
      </Styled.TextWrapper>
      {hasChild && childVisible && <TreeView data={node.children} />}
    </li>
  );
};
