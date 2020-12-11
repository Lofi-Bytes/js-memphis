import React, { FC, ReactNode } from 'react'

import Banner from '../components/banner'
import Layout from '../components/layout'
import Section from '../components/section'
import SEO from '../components/seo'
import Main from '../components/main'


const SpeakingListPage: FC<ReactNode> = () => {
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
            Speaking
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="fal fa-podium-star text-emerald-300"></i>
            </span>
            <span className="block sm:hidden">
              <i className="fal fa-podium-star text-emerald-300"></i>
            </span>
          </>
        }
        // subTitle={<span className="text-teal-100">Designer, Full Stack Developer, &amp; Tech Lead</span>}
      />
      <Main>
        <Section>

        </Section>
      </Main>
    </Layout>
  )
}

export default SpeakingListPage
