'use client'

type BookProps = {
  title: string
  subTitle?: string
  color: string
}
export function Book(props: BookProps) {
  const handleClick = () => {
    console.log(props.title)
  }

  return (
    <div className={`flex flex-col rounded-md cursor-pointer bg-${props.color}-800`} onClick={handleClick}>
      <div className="px-2 py-1 mb-1">
        <div className="text-lg">{props.title}</div>
        <div className="text-xs">{props.subTitle ?? '-'}</div>
      </div>
      <div className={`flex flex-col gap-2 p-2 rounded-md bg-${props.color}-600`}>
        <div className="h-2 bg-white" />
        <div className={`h-2 bg-${props.color}-400`} />
        <div className={`h-2 bg-${props.color}-200`} />
      </div>
    </div>
  )
}
