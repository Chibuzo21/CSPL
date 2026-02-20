"use client";

import { useState } from "react";

interface Comment {
  _id: string;
  name: string;
  content: string;
  createdAt: string;
}

interface CommentsProps {
  postId: string;
  initialComments: Comment[];
}

export default function Comments({ postId, initialComments }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, postId }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit comment");
      }

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", content: "" });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      setError("Failed to submit comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='mt-16 border-t border-gray-200 dark:border-gray-800 pt-12'>
      <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8'>
        Comments ({comments.length})
      </h2>

      {/* Existing Comments */}
      <div className='space-y-6 mb-12'>
        {comments.length === 0 ? (
          <p className='text-gray-600 dark:text-gray-400'>
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment._id}
              className='bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700'>
              <div className='flex items-center justify-between mb-3'>
                <span className='font-semibold text-gray-900 dark:text-white'>
                  {comment.name}
                </span>
                <time className='text-sm text-gray-500 dark:text-gray-400'>
                  {new Date(comment.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                {comment.content}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Comment Form */}
      <div className='bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700'>
        <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>
          Leave a Comment
        </h3>

        {submitSuccess && (
          <div className='bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-700 rounded-lg p-4 mb-6'>
            <p className='text-success-700 dark:text-success-300'>
              ✅ Comment submitted! It will appear after approval.
            </p>
          </div>
        )}

        {error && (
          <div className='bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-700 rounded-lg p-4 mb-6'>
            <p className='text-error-700 dark:text-error-300'>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Name *
              </label>
              <input
                type='text'
                id='name'
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Email * (not published)
              </label>
              <input
                type='email'
                id='email'
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='content'
              className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Comment *
            </label>
            <textarea
              id='content'
              required
              rows={4}
              minLength={10}
              maxLength={1000}
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white resize-none'
              placeholder='Share your thoughts...'
            />
            <p className='text-sm text-gray-500 dark:text-gray-400 mt-1'>
              {formData.content.length}/1000 characters
            </p>
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full sm:w-auto bg-primary-900 hover:bg-primary-800 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200'>
            {isSubmitting ? "Submitting..." : "Submit Comment"}
          </button>

          <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
            Your comment will be reviewed before appearing on the site.
          </p>
        </form>
      </div>
    </div>
  );
}
