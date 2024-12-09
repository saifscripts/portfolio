import { Divider } from '@nextui-org/divider';
import Image from 'next/image';
import Topbar from './_components/Topbar';

export default async function Page() {
  const blog = {
    _id: '672d8ac1cbbb22e1f32d9f07',
    title: 'Next.js: The Future of Web Development',
    summary:
      "Next.js is a powerful and flexible framework for building web applications. Here's why it's the future of web development.",
    content:
      '<h2>1. Server-side Rendering (SSR)</h2><p>Next.js provides built-in support for server-side rendering, which improves SEO and initial load times. This is a game-changer for web applications that need to be indexed by search engines.</p><h2>2. Static Site Generation (SSG)</h2><p>Next.js also supports static site generation, which can significantly improve performance and reduce hosting costs. This feature is great for websites with mostly static content.</p><h2>3. API Routes</h2><p>Next.js makes it easy to create API routes for your application. This is useful for handling dynamic data and integrating with external services.</p><h2>4. File-based Routing</h2><p>Next.js uses a file-based routing system, which makes it easy to organize your application. This feature is especially useful for large applications with many pages.</p><h2>5. TypeScript Support</h2><p>Next.js has first-class support for TypeScript, which can improve code quality and developer productivity. This is a big advantage for large applications or teams with multiple developers.</p><h2>6. Image Optimization</h2><p>Next.js automatically optimizes images, which can improve performance and reduce bandwidth usage. This is a great feature for applications with a lot of images.</p><h2>7. Built-in CSS Support</h2><p>Next.js has built-in support for CSS, which makes it easy to style your application. This is a big advantage over other frameworks that require additional setup for styling.</p>',
    category: 'tech',
    tags: ['nextjs', 'web development', 'javascript'],
    featuredImage:
      'https://res.cloudinary.com/dz6h5okzp/image/upload/v1732232376/delibhai_tbcc8u.jpg',
    upvotes: ['66fe2e7a995506295aa53373'],
    downvotes: [],
    comments: [],
    totalVotes: 1,
    totalComments: 0,
    isPremium: false,
    isPublished: true,
    isDeleted: false,
    createdAt: '2024-11-08T03:51:29.690Z',
    updatedAt: '2024-11-10T14:38:36.672Z',
    __v: 0,
  };

  return (
    <>
      <Topbar />
      <div className="p-4 space-y-4 max-w-4xl mx-auto relative">
        <h1 className="font-bold text-5xl my-4">{blog.title}</h1>
        <p className="text-sm text-default-500">{blog.summary}</p>
        <Divider />
        <div className="w-full aspect-video rounded-xl overflow-hidden">
          <Image
            src={blog.featuredImage}
            alt={blog.title}
            width={800}
            height={450}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div
          className="article"
          style={{ width: '100%' }}
          dangerouslySetInnerHTML={{ __html: blog?.content || '' }}
        />
      </div>
    </>
  );
}
