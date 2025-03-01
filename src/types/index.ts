export type Chapter = {
    identity: string
    title: string
    content: string
    words: string[]
}

const str = '人生的[significance]，如果仅在于[pursue]成功，得到的快乐[perhaps]并不会多。[indeed]带给你成就感的是成长。[conquer]自身的[defect]，[quest]未知的[domain]，在不断[polish]自己的过程中，更能[comprehend]到由衷的[joy]和人生的[merit]。'

export type local = {
    achieved: boolean
}