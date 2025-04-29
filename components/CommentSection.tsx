'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'

interface CommentSectionProps {
  herbId: string
  comments: {
    id: string
    content: string
    user: {
      name: string
    }
    createdAt: string
  }[]
  onAddComment: (herbId: string, content: string) => Promise<{
    success: boolean
    comment?: {
      id: string
      content: string
      user: {
        name: string
      }
      createdAt: string
    }
    error?: string
  }>
}

export default function CommentSection({ herbId, comments, onAddComment }: CommentSectionProps) {
  const { data: session } = useSession()
  const [newComment, setNewComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setIsSubmitting(true)
    setError(null)

    try {
      const result = await onAddComment(herbId, newComment)
      if (result.success && result.comment) {
        setNewComment('')
      } else {
        setError(result.error || '评论提交失败')
      }
    } catch (err) {
      setError('评论提交时发生错误')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">用户评论</h3>
      
      {session ? (
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="写下你的评论..."
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows={3}
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            {isSubmitting ? '提交中...' : '提交评论'}
          </button>
        </form>
      ) : (
        <p className="mb-6 text-gray-600">请登录后发表评论</p>
      )}

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{comment.user.name}</span>
              <span className="text-sm text-gray-500">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 