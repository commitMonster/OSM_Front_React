import styled from "styled-components";

export const TitleStyle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: rgb(48, 70, 170);
  margin-bottom: 10px;
  text-align: center;
`;
export const InputField = styled.div`
  .filebox {
  }
  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  .filebox {
  }
  label {
    display: inline-block;
    padding: 0.5em 0.75em;
    color: rgb(48, 70, 170);
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: 0.25em;
  }
  .filebox {
  }
  .upload-name {
    display: inline-block;
    padding: 0.5em 0.75em; /* label의 패딩값과 일치 */
    font-size: inherit;
    font-family: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #f5f5f5;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: 0.25em;
    -webkit-appearance: none; /* 네이티브 외형 감추기 */
    -moz-appearance: none;
    appearance: none;
  }
`;

export const TextStyle = styled.span`
  width: 100px;
  height: 50px;
  font-size: 22px;
  font-weight: bold;
  color: rgb(48, 70, 170);
  margin-right: 20px;
  margin-bottom: 10px;
`;

export const DataStyle = styled.span`
  width: 100px;
  height: 50px;
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;
