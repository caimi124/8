import { useState } from 'react'
import { useSession } from 'next-auth/react'

interface Comment {
  id: string
  content: string
  user: {
    name: string
  }
  createdAt: string
}

interface CommentSectionProps {
  herbId: string
  comments: Comment[]
  onAddComment: (content: string) => Promise<void>
}

const CommentSection = ({ herbId, comments, onAddComment }: CommentSectionProps) => {
  const { data: session } = useSession()
  const [newComment, setNewComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setIsSubmitting(true)
    try {
      await onAddComment(newComment)
      setNewComment('')
    } catch (error) {
      console.error('Failed to add comment:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">用户评论</h3>
      
      {session ? (
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="写下您的评论..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            rows={3}
          />
          <button
            type="submit"
            disabled={isSubmitting || !newComment.trim()}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            {isSubmitting ? '提交中...' : '提交评论'}
          </button>
        </form>
      ) : (
        <p className="text-gray-600 mb-6">请登录后发表评论</p>
      )}

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold">{comment.user.name}</span>
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

export default CommentSection 