import React, { useRef, useEffect, useState } from 'react';
import { AnchorProps } from 'antd';

const useHeadingsToNavItems = (ref: React.RefObject<HTMLDivElement>) => {
  const generateNavItems = () => {
    const items: AnchorProps['items'] = [];
    const stack: any[] = [];

    if (ref.current) {
      const headings = ref.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading) => {
        const level = parseInt(heading.tagName.slice(1));
        const title = heading.textContent || '';
        const id = title.replace(/\s/g, '-').toLowerCase();
        heading.id = id;
        const a = document.createElement('a')
        a.href = `#${id}`
        a.innerText = '#'
        a.className = 'nav-head-a'
        heading.appendChild(a)

        const newItem = {
          key: id,
          href: `#${id}`,
          title
        };

        while (stack.length > 0 && stack[stack.length - 1].level >= level) {
          stack.pop();
        }

        if (stack.length === 0) {
          items.push(newItem);
        } else {
          const parent = stack[stack.length - 1].item;
          if (!parent.children) {
            parent.children = [];
          }
          parent.children.push(newItem);
        }

        stack.push({ level, item: newItem });
      });
    }

    return items;
  };

  const [navItems, setNavItems] = useState<AnchorProps['items']>([]);

  useEffect(() => {
    const newNavItems = generateNavItems();
    setNavItems(newNavItems);
    return () => {
      setNavItems([]);
    };
  }, []);

  return navItems;
};

export default useHeadingsToNavItems;