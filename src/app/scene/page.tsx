'use client'

import { Button, Carousel } from 'antd'

export default function Scene() {
  // 定义文章内容
  const article = `
    人生的[significance]，如果仅在于[pursue]成功，得到的快乐[perhaps]并不会多。
    [indeed]带给你成就感的是成长。[conquer]自身的[defect]，[quest]未知的[domain]，
    在不断[polish]自己的过程中，更能[comprehend]到由衷的[joy]和人生的[merit]。
  `

  // 将文章内容按方括号分割为普通文本和英语部分
  const parts = article.split(/(\[[^\]]+\])/)

  const wordDefinitions = {
    significance: { pronunciation: '/sɪɡˈnɪfɪkəns/', meaning: '重要性' },
    pursue: { pronunciation: '/pərˈsuː/', meaning: '追求' },
    perhaps: { pronunciation: '/pərˈhæps/', meaning: '也许' },
    indeed: { pronunciation: '/ɪnˈdiːd/', meaning: '确实' },
    conquer: { pronunciation: '/ˈkɒŋkər/', meaning: '征服' },
    defect: { pronunciation: '/ˈdiːfekt/', meaning: '缺陷' },
    quest: { pronunciation: '/kwest/', meaning: '探索' },
    domain: { pronunciation: '/dəˈmeɪn/', meaning: '领域' },
    polish: { pronunciation: '/ˈpɒlɪʃ/', meaning: '打磨' },
    comprehend: { pronunciation: '/ˌkɒmprɪˈhend/', meaning: '理解' },
    joy: { pronunciation: '/dʒɔɪ/', meaning: '喜悦' },
    merit: { pronunciation: '/ˈmerɪt/', meaning: '优点' }
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-12 p-5">
      <header className="flex justify-between items-center mb-8">
        <Button color="danger" variant="solid" shape="round">
          返回
        </Button>
        <h2 className="sub-title">测试文案</h2>
      </header>
      <div className="scene-content flex flex-wrap justify-center self-center max-w-[420px] text-lg leading-relaxed text-indent-2ch">
        <p className="text-i">
          {parts.map((part, index) => {
            if (part.startsWith('[') && part.endsWith(']')) {
              return (
                <span key={index} className="text-blue-500 font-semibold underline px-1">
                  {part.slice(1, -1)}
                </span>
              )
            }
            return <span key={index}>{part}</span>
          })}
        </p>
      </div>
    </div>
  )
}
