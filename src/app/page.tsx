import { Book } from './books'
import { Divider } from 'antd'
export default function Home() {
  return (
    <>
      <h1 className="home--title text-center mt-6">Vocab Craft</h1>
      <Divider style={{ borderBlockStart: '1px solid #fff' }} />
      <div className="flex flex-row flex-wrap justify-center gap-12 mt-4">
        <Book title="四级英语" subTitle="CET-4" color="orange" route="/chapter" />
        <Book title="六级英语" subTitle="CET-6" color="green" />
        <Book title="考研英语" color="blue" />
      </div>
    </>
  )
}
