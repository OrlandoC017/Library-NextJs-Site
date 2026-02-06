import React from 'react'

export default function Highlight({ icon, title, para }: { icon: React.ReactNode; title: string; para: string }) {
  return (
    <div className="highlight">
      <div className="highlight__img">
        {icon}
      </div>
      <h3 className="highlight__subtitle">{title}</h3>
      <p className="highlight__para">
        {para}
      </p>
    </div>
  );
};


