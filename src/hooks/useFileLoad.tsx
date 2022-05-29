import React, { ChangeEvent, useState } from "react";

import styled, { FlattenSimpleInterpolation } from "styled-components";

interface IFile {
  /**
   * input 태그의 accept 속성에 해당하는 값을 전달하면 됩니다.
   */
  accept?: string;
  /**
   * styled-component의 css``를 전달하면 됩니다.
   */
  style?: FlattenSimpleInterpolation;
}

const readFileAsync = (input: HTMLInputElement) =>
  new Promise<FileReader["result"]>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      if (loadEvent.target) resolve(loadEvent.target.result);
      else reject("Cannot find reader event object.");
    };
    reader.onerror = reject;

    if (input.files) reader.readAsDataURL(input.files[0]);
  });

const useFileLoad = () => {
  const [fileData, setFileData] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const data = await readFileAsync(e.target);
    setFileData(data as string);
    setIsLoading(false);
  };

  const clearFileData = () => setFileData("");

  const FileLoader = ({
    accept,
    style,
    children,
  }: React.PropsWithChildren<IFile>) => {
    return (
      <StyleLabel css={style}>
        {children}
        <HiddenFileInput type="file" accept={accept} onChange={onChange} />
      </StyleLabel>
    );
  };

  return {
    /**
     * label 태그와 input 태그로 구성된, component입니다.
     *
     * style이라는 props로 css``를 전달하면 스타일을 적용할 수 있습니다.
     */
    FileLoader,
    isLoading,
    fileData,
    setFileData,
    /**
     * 불러온 파일을 비우는 함수입니다.
     */
    clearFileData,
  };
};

const StyleLabel = styled.label<{ css: IFile["style"] }>`
  ${({ css }) => css}
`;

const HiddenFileInput = styled.input`
  display: none;
`;

export default useFileLoad;
