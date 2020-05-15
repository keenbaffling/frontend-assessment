import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import { Tabs } from './components/Tabs/Tabs';
import { Accordion } from './components/Accordion/Accordion';

type CurrentDisplay = 'tabs' | 'accordion';

interface Item {
  title: string;
  content: string;
}

const demoData = require('./api/data.json');

export const App: React.FC = () => {
  const [mode, setMode] = useState<CurrentDisplay>('tabs');
  const [items, setItems] = useState<Item[]>([]);
  const [currentItem, setCurrentItem] = useState(0);
  const [width] = useWindowSize();

  useEffect(() => {
    setItems(demoData);

    if (width < 768) {
      setMode('accordion');
    } else {
      setMode('tabs');
    }
  }, [width]);

  let display;

  if (mode === 'tabs') {
    display = (
      <Tabs
        items={items}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    );
  } else {
    display = (
      <Accordion
        items={items}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    );
  }

  return (
    <div className="App">
      <div className="container" style={{ marginTop: '5vh' }}>
        {display}
      </div>
    </div>
  );
};

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
