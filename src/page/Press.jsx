import React, { memo } from 'react';
import './Press.css';

// Separate data into constants to improve maintainability
const PRESS_RELEASES = [
  {
    id: 1,
    title: 'Resume-lite Launches New Features',
    link: '/press/release-1',
    date: 'January 1, 2023'
  },
  {
    id: 2,
    title: 'Resume-lite Reaches 1 Million Users',
    link: '/press/release-2',
    date: 'February 15, 2023'
  },
  {
    id: 3,
    title: 'Resume-lite Partners with Top Companies',
    link: '/press/release-3',
    date: 'March 10, 2023'
  }
];

const NEWS_ARTICLES = [
  {
    id: 1,
    title: 'TechCrunch: Resume-lite Revolutionizes Resume Building',
    link: 'https://example.com/news-article-1',
    date: 'April 5, 2023'
  },
  {
    id: 2,
    title: 'Forbes: Top 10 Resume Builders in 2023',
    link: 'https://example.com/news-article-2',
    date: 'May 20, 2023'
  },
  {
    id: 3,
    title: 'Business Insider: How Resume-lite is Helping Job Seekers',
    link: 'https://example.com/news-article-3',
    date: 'June 15, 2023'
  }
];

const NAVIGATION_LINKS = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'About Us', path: '/about' },
  { id: 3, title: 'Features', path: '/features' },
  { id: 4, title: 'Pricing', path: '/Sales' },
  { id: 5, title: 'Support', path: '/Support' },
  { id: 6, title: 'Contact', path: '/contact' }
];

// Create reusable list component
const LinkList = memo(({ items }) => (
  <ul>
    {items.map(({ id, title, link, date, path }) => (
      <li key={id}>
        <a href={link || path}>{title}</a>
        {date && <p>{date}</p>}
      </li>
    ))}
  </ul>
));

const Press = () => {
  return (
    <div className="press-container">
      <h1>Press</h1>
      <div className="press-section">
        <h2>Press Releases</h2>
        <LinkList items={PRESS_RELEASES} />
      </div>
      <div className="press-section">
        <h2>In the News</h2>
        <LinkList items={NEWS_ARTICLES} />
      </div>
      <div className="press-section">
        <h2>Sitemap</h2>
        <LinkList items={NAVIGATION_LINKS} />
      </div>
    </div>
  );
};

export default memo(Press);
