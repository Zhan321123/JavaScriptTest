import React, {useEffect, useRef} from "react";
import Svg from "@/utils/icons";
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark-dimmed.css';
import {Select, Space} from "antd";

export function Code({language = ' ', fileName = ' ', children}) {
  /**
   * 代码块展示
   * @param language 语言类型
   * @param fileName 文件名
   */
  const [folded, setFolded] = React.useState(true)
  const codeRef = useRef(null);
  children = children.trim()

  useEffect(() => {
    const codeElement = codeRef.current;
    if (codeElement) {
      hljs.highlightElement(codeElement);
    }
    return () => {
      hljs.unregisterLanguage(language);
    };
  }, []);
  return (
    <div className={'border'}>
      <div className={'between'} style={{height: 40}}>
        <div className={'code'}>{fileName}</div>
        <button className={'button'} onClick={() => setFolded(!folded)}>{folded ? <Svg name={'up'}/> :
          <Svg name={'down'}/>}</button>
        <div className={'code'}>{language}</div>
      </div>
      <hr/>
      <pre style={{overflow: 'auto', padding: '10px', height: folded ? 80 : 'auto'}}>
        <code ref={codeRef} className={`code ${language}`}>
          {children}
        </code></pre>
    </div>
  )
}

interface MultipleCodesProps {
  codes: string[],
  fileNames: string[],
  languages: string[]
}

interface SelectProps {
  value: number,
  label: string
}

export function MultipleCodes({codes, fileNames, languages}: MultipleCodesProps) {

  codes = codes.map(code => {return code.trim()})
  const [folded, setFolded] = React.useState(true)
  const [selectId, setSelectId] = React.useState(0)
  const codeRef = useRef(null);
  useEffect(() => {
    const codeElement = codeRef.current;
    if (codeElement) {
      hljs.highlightElement(codeElement);
    }
    return () => {
      hljs.unregisterLanguage(languages[selectId]);
    };
  }, [selectId]);
  const option: SelectProps[] = fileNames.map((fileName, index) => {
    return {
      value: index,
      label: fileName
    }
  })
  const handleChange = (value: number) => {
    setSelectId(value)
  };
  return (
    <div className={'border'}>
      <div className={'between'} style={{height: 40}}>
        <Select
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{width: '15vw'}}
          defaultValue={0}
          onChange={handleChange}
          options={option}
        />
        <button className={'button'} onClick={() => setFolded(!folded)}>{folded ? <Svg name={'up'}/> :
          <Svg name={'down'}/>}</button>
        <div className={'code'}>{languages[selectId]}</div>
      </div>
      <hr/>
      <pre style={{overflow: 'auto', padding: '10px', height: folded ? 80 : 'auto'}}>
        <code ref={codeRef} className={`code ${languages[selectId]}`}>
          {codes[selectId]}
        </code></pre>
    </div>
  )
}
