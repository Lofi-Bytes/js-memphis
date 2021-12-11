import React, { CSSProperties } from "react"

import { formatClassList, joinStrings } from '../../utils/utils'


const CODE_TAG: string = `
  font-mono
  font-thin
  mb-4
  ml-3
  px-4
  rounded-bl-xl
  rounded-tr-xl
  shadow-md
  text-lg
  w-max
`

type CodeTagProps = {
  tag: string,
  tagBgColor: string,
  tagColor: string
}

const CodeTag = ({
  tag,
  tagBgColor,
  tagColor
}: CodeTagProps) => {
  let formattedCodeTag: string = formatClassList(CODE_TAG)

  let style: CSSProperties = {
    color: tagColor,
    backgroundColor: tagBgColor
  }

  if (!tagColor.startsWith("#")) {
    delete style.color
    formattedCodeTag = joinStrings(' ', formattedCodeTag, tagColor)
  }

  if (!tagBgColor.startsWith("#")) {
    delete style.backgroundColor
    formattedCodeTag = joinStrings(' ', formattedCodeTag, tagBgColor)
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
