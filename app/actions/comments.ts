'use server'

import { prisma } from '../../lib/prisma'

export async function addComment(herbId: string, content: string) {
  try {
    const comment = await prisma.comment.create({
      data: {
        content,
        herbId,
        // 这里需要添加用户ID，暂时使用一个默认值
        userId: 'default-user-id'
      }
    })
    return { success: true, comment }
  } catch (error) {
    console.error('Error adding comment:', error)
    return { success: false, error: 'Failed to add comment' }
  }
} 