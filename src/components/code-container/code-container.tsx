import React, { FC, ReactNode } from 'react'

import CodeTag from '../code-tag'


type CodeContainerProps = {
  children: ReactNode,
  language: string,
  lineNumbers: boolean,
  path?: string,
  tag: string,
  tagBgColor: string,
  tagColor: string
}

const CodeContainer: FC<CodeContainerProps> = ({
  children,
  language,
  lineNumbers,
  path,
  tag,
  tagBgColor,
  tagColor
}: CodeContainerProps) => {
  return (
    <div className="p-1 pt-3 mt-4 border-l-8 border-blue-500 rounded shadow code-container bg-stone-50">
      {
        path
          ?
            <div className="mb-4 ml-3">
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
