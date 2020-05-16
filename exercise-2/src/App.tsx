import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import { Tabs } from './components/Tabs/Tabs';
import { Accordion } from './components/Accordion/Accordion';

type CurrentDisplay = 'tabs' | 'accordion';

interface Item {
  title: string;
  content: string;
}

// Pull data from the given JSON file.
const demoData = require('./api/data.json');

export const App: React.FC = () => {
  // Set multiple modes that will switch views upon window resize event.
  const [mode, setMode] = useState<CurrentDisplay>('tabs');

  // Set initial items as empty array.
  const [items, setItems] = useState<Item[]>([]);

  // Set the first index as the initial active item from the state.
  const [currentItem, setCurrentItem] = useState(0);

  // Store window size width for determining mobile/desktop view.
  const [width] = useWindowSize();

  useEffect(() => {
    // Update `items` state from the pulled `demoData`.
    setItems(demoData);

    // Toggle modes for mobile/desktop whenever resizing occurs.
    if (width < 768) {
      setMode('accordion');
    } else {
      setMode('tabs');
    }
  }, [width]);

  let display;

  // Switch `display` for tabs or accordion.
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

  // Render component tree.
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
