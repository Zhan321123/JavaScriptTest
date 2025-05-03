import React from 'react';
import {Anchor, AnchorProps} from 'antd';

export default function Content({items}: {items: AnchorProps['items']}) {
  return (
    <div className={'right font-color font-small'}>
      <p style={{textAlign: 'center'}}>Content</p>
      <hr/>
      <Anchor
        style={{overflowY: 'auto'}}
        affix={false}
        items={items}
      />
    </div>
  );
}
