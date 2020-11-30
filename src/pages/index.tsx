import React, { FC, ReactNode } from 'react'

import Layout from '../components/layout'

import js from '../images/js.jpg'

const Home: FC<ReactNode> = () => {
  return (
    <Layout>
      <section className="bg-gray-100 rounded-xl p-8 w-2/3 mx-auto -mt-12 mb-10 shadow-xl relative z-10">
        <div className="absolute -top-16 left-1/2">
          <div
            className="w-28 h-28 rounded-full overflow-hidden relative -left-1/2 shadow-xl flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${js})`
            }}
          >
              <figure className="bg-cover hidden">
                <img src={js} className="bg-cover hidden" alt="Jillian's profile photo." />
              </figure>
            <div className="w-full h-full absolute top-0 left-0 rounded-full ring-4 ring-purple-300 ring-opacity-30 ring-inset"></div>
          </div>
        </div>
        <h2 className="text-gray-700 text-2xl mt-6">About Me</h2>
        <p className="text-gray-500 tracking-wider mt-4">
          Greetings! My name is Jillian (she/her). I'm a software developer based in Colorado, USA.
        </p>
        <p className="text-gray-500 tracking-wider mt-4">
          My interests in software development lie at the intersection of improving developer experience, designer experience, <em>and</em> <a href="https://medium.com/s/user-friendly/why-im-done-saying-user-user-experience-and-ux-in-2019-4fdfc6b7de23" target="_blank" rel="noopener noreferrer">audience&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a> experience. I work on innovative approaches to software and design such as <i className="fas fa-heart" style={{ color: 'pink' }}></i> <a href="https://www.invisionapp.com/inside-design/guide-to-design-systems/" target="_blank" rel="noopener noreferrer">design dystems&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a>, <a href="https://medium.com/omarelgabrys-blog/component-based-architecture-3c3c23c7e348" target="_blank" rel="noopener noreferrer">component based&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a>, <a href="https://martinfowler.com/articles/serverless.html" target="_blank" rel="noopener noreferrer">serverless&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a>, <a href="https://martinfowler.com/articles/microservices.html" target="_blank" rel="noopener noreferrer"> and microservice&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a> architectures, and the beloved <i className="fas fa-heart" style={{ color: 'pink' }}></i> <a href="https://jamstack.org/" target="_blank" rel="noopener noreferrer">Jamstack&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a>.
        </p>

        <h3 className="text-gray-600 text-xl mt-10">Current Work</h3>
        <p className="text-gray-500 tracking-wider mt-4">
          I work for a nonprofit organization, <a href="https://bscs.org/" target="_blank" rel="noopener noreferrer">BSCS Science Learning&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a>, whose mission is to transform science teaching and learning through research-driven innovation.
        </p>
        <p className="text-gray-500 tracking-wider mt-4">
          At BSCS Science Learning, we operate on federal and private grants. The nature of this work requires our small team to build many websites and web apps every year. Implementing our infrastructure to be agile enough to meet the needs of a diverse range of projects while staying within budget, meeting strict deadlines, and reducing the cost of ongoing maintenance (technical debt) is paramount.
        </p>

        <h3 className="text-gray-600 text-xl mt-10">Previous Work</h3>
        <p className="text-gray-500 tracking-wider mt-4">
          Prior to my career as a software developer, I was an astronomy and physics instructor. My courses introduced students to the skills required to think critically about the physical world and offered students experience in solving real-world problems.
        </p>
        <p className="text-gray-500 tracking-wider mt-4">
          In graduate school, I studied the space environment of planets and comets. Colloquially known as “space weather,” my studies investigated how the solar wind affects the magnetospheres, ionospheres, and upper atmospheres of these objects.
        </p>

        <h3 className="text-gray-600 text-xl mt-10">Education</h3>
        <p className="text-gray-500 tracking-wider mt-4">
          I hold an <a href="https://en.wikipedia.org/wiki/Master_of_Science#United_States" target="_blank" rel="noopener noreferrer">M.S.&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a> in <a href="https://clasp.engin.umich.edu/" target="_blank" rel="noopener noreferrer">Atmospheric and Space Science&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a> and a <a href="https://en.wikipedia.org/wiki/Graduate_certificate#United_States" target="_blank" rel="noopener noreferrer">GradCert&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a> in <a href="https://micde.umich.edu/" target="_blank" rel="noopener noreferrer">Computer Science and Engineering&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a> from <a href="https://umich.edu/" target="_blank" rel="noopener noreferrer">The University of Michigan, Ann Arbor&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a>. I did my undergraduate studies at <a href="https://www.colorado.edu/" target="_blank" rel="noopener noreferrer">The University of Colorado, Boulder&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a> where I earned a <a href="https://en.wikipedia.org/wiki/Bachelor%27s_degree" target="_blank" rel="noopener noreferrer">B.A.&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a> in <a href="https://www.colorado.edu/aps/" target="_blank" rel="noopener noreferrer">Astrophysical, Planetary, and Atmospheric Science&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a> and a <a href="https://en.wikipedia.org/wiki/Bachelor%27s_degree" target="_blank" rel="noopener noreferrer">B.A.&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a> in <a href="https://www.colorado.edu/physics/" target="_blank" rel="noopener noreferrer">Physics&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a>.
        </p>

        <h3 className="text-gray-600 text-xl mt-10">Extracurricular Interests</h3>
        <p className="text-gray-500 tracking-wider mt-4">
          In my free time I enjoy adventuring in my van (<a href="https://www.instagram.com/explore/tags/vanlife/?hl=en" target="_blank" rel="noopener noreferrer">#vanlife&nbsp;<sup><i className="fas fa-external-link-alt external-link-icon" /></sup></a>), spending time with my dog, practicing yoga, mountain biking, and reading.
        </p>
      </section>

      <section className="bg-gray-100 rounded-xl p-8 pb-10 w-2/3 mx-auto mb-20 shadow-xl z-10 relative">
        <h2 className="text-gray-700 text-2xl">Say Hello</h2>
        <div className="grid grid-cols-1 gap-6 mt-8">
          <label className="block">
            <span className="text-gray-500 tracking-wider">Name</span>
            <input type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-900 bg-gray-100" placeholder="" />
          </label>
          <label className="block">
            <span className="text-gray-500 tracking-wider">Email</span>
            <input type="email" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-900 bg-gray-100" />
          </label>
          <label className="block">
            <span className="text-gray-500 tracking-wider">Message</span>
            <textarea className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-900 bg-gray-100" rows={2}></textarea>
          </label>
        </div>
      </section>

    </Layout>
  )
}

export default Home
