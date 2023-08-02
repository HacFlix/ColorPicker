import { CopyToClipboard } from "react-copy-to-clipboard";
const Color = ({ code, showToast }) => {
  return (
    <>
      <div className="card">
        <div className="color" style={{ backgroundColor: `#${code}` }}></div>
        <div className="code">#{code}</div>
        <CopyToClipboard text={code}>
          <div className="copy" onClick={() => showToast(code)}>
            COPY
          </div>
        </CopyToClipboard>
      </div>
    </>
  );
};
export default Color;
