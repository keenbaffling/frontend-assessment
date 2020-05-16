import React from 'react';
import './Tabs.css';
import { Nav } from './Nav';
import { Content } from './Content';

interface Tab {
  title: string;
  content: string;
}

interface Props {
  items: Tab[];
  currentItem: number;
  setCurrentItem: (index: number) => void;
}

export const Tabs: React.FC<Props> = ({
  items,
  currentItem,
  setCurrentItem,
}) => {
  // Iterate list of tab navigation items and set each item state.
  const nav = items.map((item: Tab, i: number) => (
    <Nav
      active={i === currentItem}
      title={item.title}
      onClick={() => setCurrentItem(i)}
      key={`tab-${i}`}
    />
  ));

  return (
    <div className="tabs">
      <div className="tab__nav">{nav}</div>

      <Content {...items[currentItem]} />
    </div>
  );
};
