import { Button } from 'antd'
export default function Chapter() {
  return (
    <div className="w-screen h-screen flex flex-col gap-12 p-5">
      <header className="flex justify-between items-center mb-8">
        <Button color="danger" variant="solid" shape="round">
          返回
        </Button>
        <h2 className="sub-title">Javascript进阶</h2>
      </header>
      <ul className="chapter-list">
        <li>
          <span>第一章 ES6新特性</span>
          <span className="status read">已读</span>
        </li>
        <li>
          <span>第二章 异步编程</span>
          <span className="status unread">未读</span>
        </li>
      </ul>
    </div>
  )
}
