"use client";

import React from 'react'
import { Zap, BookOpen, Tag } from 'lucide-react';
import Highlight from './ui/highlight';

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>?
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<Zap size={64} />}
              title="Easy and quick"
              para="Get access to the books you purchased online instantly"
            />
            <Highlight
              icon={<BookOpen size={64} />}
              title="10,0000+ Books"
              para="Library has a vast collection of books across all genres"
            />
            <Highlight
              icon={<Tag size={64} />}
              title="Easy and quick"
              para="Get access to the books you purchased online instantly"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
