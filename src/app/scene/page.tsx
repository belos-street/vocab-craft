'use client'

import { useState } from 'react'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import { Button, Carousel } from 'antd'

// 定义类型
type WordMeaning = {
  partOfSpeech: string
  definition: string
}

type WordData = {
  word: string
  pronunciation: string
  meanings: WordMeaning[]
}

type UserInputState = {
  [key: string]: string
}

type ValidationState = {
  [key: string]: boolean
}

type PageData = {
  article: string
  wordData: WordData[]
  inputs: UserInputState
  validations: ValidationState
}

export default function Scene() {
  // 初始化页面数据
  const pageData: PageData = {
    article: `
      人生的[significance]，如果仅在于[pursue]成功，得到的快乐[perhaps]并不会多。
      [indeed]带给你成就感的是成长。[conquer]自身的[defect]，[quest]未知的[domain]，
      在不断[polish]自己的过程中，更能[comprehend]到由衷的[joy]和人生的[merit]。
    `,
    wordData: [
      { word: 'significance', pronunciation: '/sɪɡˈnɪfɪkəns/', meanings: [{ partOfSpeech: '名词', definition: '重要性；意义' }] },
      { word: 'pursue', pronunciation: '/pərˈsuː/', meanings: [{ partOfSpeech: '动词', definition: '追求；从事' }] },
      { word: 'perhaps', pronunciation: '/pərˈhæps/', meanings: [{ partOfSpeech: '副词', definition: '也许；可能' }] },
      { word: 'indeed', pronunciation: '/ɪnˈdiːd/', meanings: [{ partOfSpeech: '副词', definition: '确实；实际上' }] },
      { word: 'conquer', pronunciation: '/ˈkɒŋkər/', meanings: [{ partOfSpeech: '动词', definition: '征服；克服' }] },
      { word: 'defect', pronunciation: '/ˈdiːfekt/', meanings: [{ partOfSpeech: '名词', definition: '缺陷；缺点' }] },
      { word: 'quest', pronunciation: '/kwest/', meanings: [{ partOfSpeech: '名词', definition: '探索；追求' }] },
      { word: 'domain', pronunciation: '/dəˈmeɪn/', meanings: [{ partOfSpeech: '名词', definition: '领域；范围' }] },
      { word: 'polish', pronunciation: '/ˈpɒlɪʃ/', meanings: [{ partOfSpeech: '动词', definition: '磨光；润色' }] },
      { word: 'comprehend', pronunciation: '/ˌkɒmprɪˈhend/', meanings: [{ partOfSpeech: '动词', definition: '理解；领会' }] },
      { word: 'joy', pronunciation: '/dʒɔɪ/', meanings: [{ partOfSpeech: '名词', definition: '喜悦；高兴' }] },
      { word: 'merit', pronunciation: '/ˈmerɪt/', meanings: [{ partOfSpeech: '名词', definition: '优点；价值' }] }
    ],
    inputs: {},
    validations: {}
  }

  // 状态管理
  const [inputs, setInputs] = useState<UserInputState>(pageData.inputs)
  const [validations, setValidations] = useState<ValidationState>(pageData.validations)

  // 处理输入框变化
  const handleInputChange = (word: string, value: string) => {
    setInputs((prev) => ({ ...prev, [word]: value }))
  }

  // 提交校验
  const handleSubmit = () => {
    const newValidations: ValidationState = {}
    pageData.wordData.forEach(({ word }) => {
      const userInput = inputs[word]?.trim().toLowerCase()
      const isCorrect = userInput === word.toLowerCase()
      newValidations[word] = isCorrect
    })
    setValidations(newValidations)
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="flex justify-between items-center p-5">
        <Button color="danger" variant="solid" shape="round">
          返回
        </Button>
        <h2 className="sub-title">测试文案</h2>
      </header>
      <Carousel arrows infinite={false} adaptiveHeight draggable>
        {/* 第一页 */}
        <Page1 article={pageData.article} />
        {/* 第二页 */}
        <Page2 wordData={pageData.wordData} />
        {/* 第三页 */}
        <Page3
          article={pageData.article}
          wordData={pageData.wordData}
          inputs={inputs}
          validations={validations}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </Carousel>
    </div>
  )
}
