import * as S from "./styles";

export interface TagProps {
  children: JSX.Element;
  padding: "link" | "tag";
  fontSize: "link" | "tag";
}

export const Tag = ({ children, fontSize, padding }: TagProps) => (
  <S.TagContainer fontSize={fontSize} padding={padding}>
    {children}
  </S.TagContainer>
);
