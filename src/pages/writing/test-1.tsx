import React, { FC, ReactNode, useEffect } from 'react'

import Banner from '../../components/banner'
import Layout from '../../components/layout'
import TextLink from '../../components/text-link'
import Section from '../../components/section'
import SEO from '../../components/seo'
import Main from '../../components/main'

import Prism from 'prismjs'


const code =
`export function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}`

const FirstPostTestPage: FC<ReactNode> = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })

  return (
    <Layout>
      <SEO
        metaTitle=""
        metaDescription=""
        canonicalUrl=""
      />
      <Banner
        title={
          <>
            {/* <span className="hidden sm:inline-block">
              <i className="fal fa-narwhal text-rose-300"></i>&nbsp;
            </span> */}
            <span className="text-teal-100">
            Writing
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="fal fa-comment-edit text-orange-300"></i>
            </span>
            <span className="block sm:hidden">
              <i className="fal fa-comment-edit text-orange-300"></i>
            </span>
          </>
        }
        // subTitle={<span className="text-teal-100">Designer, Full Stack Developer, &amp; Tech Lead</span>}
      />
      <Main>
        <Section className="-mt-12 mb-8">
          <div className="code-container">
            <pre className="line-numbers py-6">
              <code className="language-javascript">{code}</code>
            </pre>
          </div>
        </Section>
      </Main>
    </Layout>
  )
}

export default FirstPostTestPage
