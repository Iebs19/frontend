import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from './BlogPost';
import blogsData from './blogs.json';

const BlogPage = () => {
  const { blogID } = useParams(); // Change this to match the router parameter name
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = () => {
      try {
        const id = parseInt(blogID, 10); // Adjust to use blogID
        if (id > 0 && id <= blogsData.length) {
          setBlog(blogsData[id - 1]);
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        setError('An error occurred while fetching the blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogID]); // Adjust dependency to blogID

  if (loading) {
    return <div className="min-h-screen bg-gray-100 p-4">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-gray-100 p-4">{error}</div>;
  }

  return (
    <div className="min-h-screen backdrop-blur-md p-4">
      {blog ? <BlogPost title={blog.title} content={blog.content} /> : <p>Blog not found</p>}
    </div>
  );
};

export default BlogPage;
