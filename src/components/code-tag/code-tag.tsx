import * as React from 'react'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'


type CodeTagProps = {
  tag: string,
  tagBgColor: string,
  tagColor: string
}

const CODE_TAG = formatClassList([
  'font-mono',
  'font-thin',
  'mb-4',
  'ml-3',
  'px-4',
  'rounded-bl-xl',
  'rounded-tr-xl',
  'shadow-md',
  'text-lg',
  'w-max'
])

const CodeTag = ({
  tag,
  tagBgColor,
  tagColor
}: CodeTagProps) => {
  let formattedCodeTag: string

  let style: React.CSSProperties = {
    color: tagColor,
    backgroundColor: tagBgColor
  }

  if (!tagColor.startsWith("#") && !tagBgColor.startsWith("#")) {
    formattedCodeTag = joinStrings(' ', CODE_TAG, tagColor, tagBgColor)
  }

  if (!tagColor.startsWith("#") && tagBgColor.startsWith("#")) {
    formattedCodeTag = joinStrings(' ', CODE_TAG, tagColor)
  }

  if (tagColor.startsWith("#") && !tagBgColor.startsWith("#")) {
    formattedCodeTag = joinStrings(' ', CODE_TAG, tagBgColor)
  }

  return (
    <div
      className={formattedCodeTag}
      style={style}
    >
      {tag}
    </div>
  )
}

export default CodeTag
