import React from 'react';
import './Accordion.css';
import { Item } from './Item';

interface Tab {
  title: string;
  content: string;
}

interface Props {
  items: Tab[];
  currentItem: number;
  setCurrentItem: (index: number) => void;
}

export const Accordion: React.FC<Props> = ({
  items,
  currentItem,
  setCurrentItem,
}) => {
  const onClick = (i: number) => {
    if (i === currentItem) {
      setCurrentItem(-1);
      return;
    }

    setCurrentItem(i);
  };

  const list = items.map((item, i) => (
    <Item
      active={i === currentItem}
      onClick={() => onClick(i)}
      key={`accordion-${i}`}
      {...item}
    />
  ));

  return <div className="accordion">{list}</div>;
};
