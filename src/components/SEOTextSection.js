import React from 'react';

const SEOTextSection = ({ title, paragraphs = [], lists = [] }) => {
  if (!paragraphs.length && !lists.length) return null;

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-6">{title}</h2>}
        {paragraphs.map((p, i) => (
          <p key={i} className="text-gray-700 leading-relaxed mb-4 text-base">{p}</p>
        ))}
        {lists.map((list, i) => (
          <div key={i} className="mb-4">
            {list.heading && <h3 className="text-xl font-semibold text-dark mb-3">{list.heading}</h3>}
            <ul className="space-y-2 mb-4">
              {list.items.map((item, j) => (
                <li key={j} className="text-gray-700 text-base pl-4 border-l-2 border-accent">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SEOTextSection;
