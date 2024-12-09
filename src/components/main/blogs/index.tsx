'use client';

import { Section, SectionHeader } from '@/components/ui/section';
import { useHashSync } from '@/hooks/hash-sync.hook';
import BlogCard from './BlogCard';

const data = [
  {
    title: 'Optimizing React Performance with Memoization',
    slug: 'react-performance-memoization',
    date: '2024-01-01',
    tags: ['React', 'Performance', 'Memoization'],
    image:
      'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732232376/delibhai_tbcc8u.jpg',
  },
  {
    title: 'Building Server-Side Rendered Apps with Next.js',
    slug: 'nextjs-server-side-rendering',
    date: '2024-01-02',
    tags: ['Next.js', 'Server-Side Rendering', 'SSR'],
    image:
      'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732232376/delibhai_tbcc8u.jpg',
  },
  {
    title: 'Mastering JavaScript Promises and Async/Await',
    slug: 'javascript-promises-async-await',
    date: '2024-01-03',
    tags: ['JavaScript', 'Promises', 'Async/Await'],
    image:
      'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732232376/delibhai_tbcc8u.jpg',
  },
];

export default function Blogs() {
  const ref = useHashSync('#blogs');

  return (
    <Section ref={ref} id="blogs">
      <SectionHeader title="Blogs_" align="right" description="My Blogs" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </div>
    </Section>
  );
}
