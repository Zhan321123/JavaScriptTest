import React, {useEffect, useRef} from "react";
import Svg from "@/utils/icons";
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark-dimmed.css';

export function Code({language=' ', code, fileName = ' '}) {
  /**
   * 代码块展示
   * @param language 语言类型
   * @param code 代码
   * @param fileName 文件名
   */
  const [folded, setFolded] = React.useState(false)
  const codeRef = useRef(null);

  useEffect(() => {
    const codeElement = codeRef.current;
    if (codeElement) {
      hljs.highlightElement(codeElement);
    }
  }, []);
  return (
    <div className={'border'}>
      <div className={'between'} style={{height: 40}}>
        <div className={'code'}>{fileName}</div>
        <button className={'button'} onClick={() => setFolded(!folded)}>{folded ? <Svg name={'up'}/> : <Svg name={'down'}/>}</button>
        <div className={'code'}>{language}</div>
      </div>
      <hr/>
      <pre style={{overflow:'auto',padding: '10px',height: folded ? 80 : 'auto'}}>
        <code ref={codeRef} className={`code ${language}`}>
          {code}
        </code></pre>
    </div>
  )
}

export function multipleCodes({codes, fileNames, languages}){
  // TODO
  return (
    <div>multiple codes</div>
  )
}