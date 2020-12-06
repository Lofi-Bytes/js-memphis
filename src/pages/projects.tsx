import React, { FC, ReactNode } from 'react'

import Banner from '../components/banner'
import Layout from '../components/layout'
import TextLink from '../components/text-link'


const ProjectsListPage: FC<ReactNode> = () => {
  return (
    <Layout>
      <Banner
        title={
          <>
            <span className="hidden sm:inline-block">
              <i className="fal fa-code-branch text-rose-300"></i>&nbsp;&nbsp;
            </span>
            <span className="text-teal-100">
            Projects
            </span>
            <span className="hidden sm:inline-block">
              &nbsp;&nbsp;<i className="fal fa-code-merge text-teal-100"></i>
            </span>
            <span className="block sm:hidden">
              <i className="fal fa-code-branch text-rose-300"></i>&nbsp;&nbsp;<i className="fal fa-code-merge text-teal-300"></i>
            </span>
          </>
        }
        // subTitle={<span className="text-teal-100">Designer, Full Stack Developer, &amp; Tech Lead</span>}
      />
      <main className="min-h-screen max-w-screen-lg m-auto mb-20">
        <section className="bg-gray-100 rounded-xl p-8 w-11/12 sm:w-2/3 mx-auto -mt-12 mb-8 sm:mb-10 shadow-xl relative">

        </section>
      </main>
    </Layout>
  )
}

export default ProjectsListPage
