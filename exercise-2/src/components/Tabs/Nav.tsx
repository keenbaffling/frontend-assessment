import React from 'react';
import classnames from 'classnames';

interface Props {
  active: boolean;
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Handle tab button display with corresponding events handling.
 */
export const Nav: React.FC<Props> = ({ active, title, onClick }) => {
  return (
    <button
      className={classnames({
        tab__button: true,
        'tab__button--active': active,
      })}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
