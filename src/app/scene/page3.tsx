'use client'

import React from 'react'
import { Input, Tooltip, Button } from 'antd'

type WordData = {
  word: string
  pronunciation: string
  meanings: { partOfSpeech: string; definition: string }[]
}

type Page3Props = {
  article: string
  wordData: WordData[]
  inputs: { [key: string]: string }
  validations: { [key: string]: boolean }
  onInputChange: (word: string, value: string) => void
  onSubmit: () => void
}

const Page3: React.FC<Page3Props> = ({ article, inputs, validations, onInputChange, onSubmit }) => {
  const parts = article.split(/(\[[^\]]+\])/)

  return (
    <div className="flex justify-center items-center mb-6">
      <div className="scene-content flex flex-wrap justify-center self-center h-[calc(100vh-135px)] max-w-[420px] text-lg px-4 mt-6">
        <p className="text-i">
          {parts.map((part, index) => {
            if (part.startsWith('[') && part.endsWith(']')) {
              const word = part.slice(1, -1)
              const isValid = validations[word]
              const inputStatus = isValid === undefined ? undefined : isValid ? 'success' : 'error'

              return (
                <span key={index} className="inline-block mx-1">
                  <Tooltip
                    title={!isValid && validations[word] !== undefined ? `正确答案: ${word}` : ''}
                    color="red"
                    placement="top"
                    overlayStyle={{ display: !isValid && validations[word] !== undefined ? 'block' : 'none' }}>
                    <Input
                      key={word}
                      value={inputs[word] || ''}
                      onChange={(e) => onInputChange(word, e.target.value)}
                      status={inputStatus}
                      placeholder="请输入单词"
                      style={{ width: '100px' }}
                    />
                  </Tooltip>
                </span>
              )
            }
            return <span key={index}>{part}</span>
          })}
        </p>
        <Button onClick={onSubmit} className="mt-4">
          提交
        </Button>
      </div>
    </div>
  )
}

export default Page3
