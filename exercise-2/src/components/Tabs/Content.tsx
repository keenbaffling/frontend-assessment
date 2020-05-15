import React from 'react';

interface Props {
  content: string;
}

export const Content: React.FC<Props> = ({ content }) => {
  return (
    <div
      className="tab__content"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};
