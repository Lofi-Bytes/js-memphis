import * as React from 'react'

import CodeTag from '../code-tag'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'

type CodeContainerProps = {
  children: React.ReactNode,
  className?: string,
  language: string,
  lineNumbers: boolean,
  path?: string,
  tag: string,
  tagBgColor: string,
  tagColor: string
}

const CODE_CONTAINER = formatClassList([
  'bg-stone-50',
  'border-blue-500',
  'border-l-8',
  'code-container',
  'mt-4',
  'p-1',
  'pt-3',
  'rounded',
  'shadow'
])

const PATH_CONTAINER = formatClassList([
  'mb-4',
  'ml-3'
])

const CodeContainer = ({
  children,
  className,
  language,
  lineNumbers,
  path,
  tag,
  tagBgColor,
  tagColor
}: CodeContainerProps) => {
  return (
    <div
      className={
        className
          ? joinStrings(' ', CODE_CONTAINER, className)
          : CODE_CONTAINER
      }
    >
      {
        path
          ?
            <div className={PATH_CONTAINER}>
              <code className="language-bash">{path}</code>
            </div>
          :
            null
      }
      <CodeTag
        tagBgColor={tagBgColor}
        tagColor={tagColor}
        tag={tag}
      />
      <pre className={lineNumbers ? "line-numbers" : null}>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  )
}

export default CodeContainer
