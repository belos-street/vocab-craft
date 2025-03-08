'use client'

import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
type Chapter = {
  id: string
  title: string
  isRead: boolean
}

export default function Chapter() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [chapters, setChapters] = useState<Chapter[]>([])

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        // 这里替换为您的实际API请求
        // const response = await fetch('/api/chapters')
        // const data = await response.json()

        // 模拟数据，实际项目中替换为API请求
        const mockData: Chapter[] = [
          { id: '1', title: '第一章 ES6新特性', isRead: true },
          { id: '2', title: '第二章 异步编程', isRead: false },
          { id: '3', title: '第三章 函数式编程', isRead: false }
        ]

        setChapters(mockData)
        setLoading(false)
      } catch (error) {
        console.error('获取章节数据失败:', error)
        setLoading(false)
      }
    }

    fetchChapters()
  }, [])
  const handleBack = () => {
    router.push('/')
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-12 p-5">
      <header className="flex justify-between items-center mb-8">
        <Button color="danger" variant="solid" shape="round" onClick={handleBack}>
          返回
        </Button>
        <h2 className="sub-title">Javascript进阶</h2>
      </header>

      {loading ? (
        <div className="flex justify-center items-center">
          <p>加载中...</p>
        </div>
      ) : (
        <ul className="chapter-list">
          {chapters.map((chapter) => (
            <li key={chapter.id} onClick={() => router.push(`/scene?chapterId=${chapter.id}`)}>
              <span>{chapter.title}</span>
              <span className={`status ${chapter.isRead ? 'read' : 'unread'}`}>{chapter.isRead ? '已读' : '未读'}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
