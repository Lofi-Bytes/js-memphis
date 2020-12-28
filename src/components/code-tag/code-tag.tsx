import React, { FC, ReactNode } from 'react'


type CodeContainerProps = {
  tag: string,
  tagBgColor: string,
  tagColor: string
}

const CodeTag: FC<CodeContainerProps> = ({
  tag,
  tagBgColor,
  tagColor
}: CodeContainerProps) => {
  return (
    <>
      {
        tagColor.startsWith("#") && tagBgColor.startsWith("#")
          ?
            <div
              className={`px-4 mb-4 ml-3 font-mono text-lg font-thin shadow-md text w-max rounded-tr-xl rounded-bl-xl`}
              style={{
                backgroundColor: `${tagBgColor}`,
                color: `${tagColor}`
              }}
            >
              {tag}
            </div>
          :
            tagColor.startsWith("#") && !tagBgColor.startsWith("#")
              ?
                <div
                  className={`px-4 mb-4 ml-3 font-mono text-lg font-thin shadow-md text w-max rounded-tr-xl rounded-bl-xl ${tagBgColor}`}
                  style={{
                    color: `${tagColor}`
                  }}
                >
                  {tag}
                </div>
              :
                !tagColor.startsWith("#") && tagBgColor.startsWith("#")
                  ?
                    <div
                      className={`px-4 mb-4 ml-3 font-mono text-lg font-thin shadow-md text w-max rounded-tr-xl rounded-bl-xl ${tagColor}`}
                      style={{
                        backgroundColor: `${tagBgColor}`,
                      }}
                    >
                      {tag}
                    </div>
                  :
                    <div
                      className={`px-4 mb-4 ml-3 font-mono text-lg font-thin ${tagBgColor} ${tagColor} shadow-md text w-max rounded-tr-xl rounded-bl-xl`}
                    >
                      {tag}
                    </div>
      }
    </>
  )
}

export default CodeTag
