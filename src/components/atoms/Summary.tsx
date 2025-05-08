import React from 'react';

interface SummaryProps {
  text: string;
}

const Summary = ({ text }: SummaryProps) => {
  return <p className="line-clamp-2 ...">{text}</p>;
};

export default Summary;
