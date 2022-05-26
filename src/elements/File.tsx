import React from "react";

import styled from "styled-components";

interface IFile {
  accept?: string;
  onChange: React.ChangeEventHandler;
}

const File = ({
  accept,
  children,
  onChange,
}: React.PropsWithChildren<IFile>) => {
  return (
    <StyleLabel>
      {children}
      <HiddenFileInput type="file" accept={accept} onChange={onChange} />
    </StyleLabel>
  );
};

const StyleLabel = styled.label``;

const HiddenFileInput = styled.input`
  display: none;
`;

export default File;
