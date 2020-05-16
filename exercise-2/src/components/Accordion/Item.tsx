import React, { useRef, useLayoutEffect, useState } from 'react';
import classnames from 'classnames';

interface Props {
  active: boolean;
  title: string;
  content: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Holds all item contents for each accordion component
 */
export const Item: React.FC<Props> = ({ active, title, content, onClick }) => {
  // React recommended way of referencing dynamic node elements which will be used on toggling event.
  const panelRef = useRef<HTMLDivElement>(null);
  // State for setting accordion dynamic item height based on contents.
  const [height, setHeight] = useState(0);

  // Assign item content height whenever toggling occurs.
  useLayoutEffect(() => {
    if (!panelRef.current || !active) {
      setHeight(0);
      return;
    }

    setHeight(panelRef.current.scrollHeight);
  }, [active]);

  return (
    <div
      className={classnames({
        accordion__item: true,
        'accordion__item--active': active,
      })}
    >
      <div className="accordion__header">
        <button className="accordion__button" onClick={onClick}>
          {title}
        </button>
      </div>
      <div ref={panelRef} className="accordion__panel" style={{ height }}>
        <div
          className="accordion__body"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};
