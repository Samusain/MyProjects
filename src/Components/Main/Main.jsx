import React from 'react'
import "./Main.css"
import Img1 from '../../images/illustration-phones.svg'
import Img2 from '../../images/illustration-laptop-desktop.svg'
import { Link } from 'react-router-dom'


const Main = () => {
  return (
  <main>
  <section className="intro">
    <article className="info">
      <h1>A modern publishing platform</h1>
      <p>Grow your audience and build your online brand</p>
    </article>
    <div className="intro-btn">
      <Link to='/details' className="start">Start for Free</Link>
      <Link to="/details" className="more">Learn More</Link>
    </div>
  </section>

  <section className="future-dsn">
    <div className="future-box">
      <h2>Designed for the future</h2>
      <article className="editor">
        <h3>Introducing an extensible editor</h3>
        <p>Blogr features an exceedingly intuitive interface which lets you focus <br/> on one thing: creating content. The editor supports management of <br/> multiple blogs and allows easy manipulation of embeds such as images,<br/> videos, and Markdown. Extensibility with plugins and themes provide <br/> easy ways to add functionality or change the looks of a blog.</p>
  
        <h3>Robust content management</h3>
        <p>Flexible content management enables users to easily move through <br/> posts. Increase the usability of your blog by adding customized <br/> categories, sections, format, or flow. With this functionality, you're in <br/> full control.</p>
      </article>
    </div>
  </section>

  <section class="art">
    <div class="art-box">
      <img src={ Img1 } alt="illustration-phones" class="phones"/>
      <article class="state-art">
        <h2>State of the Art Infrastructure</h2>
        <p>With reliability and speed in mind, worldwide data centers provide the <br/> backbone for ultra-fast connectivity. This ensures your site will load <br/> instantly, no matter where your readers are, keeping your site <br/> competitive.</p>
      </article>
    </div>
  </section>

  <section class="free">
    <div class="free-box">
      <img src={ Img2 } alt="illustration-laptop-desktop" class="laptop"/>
      <article class="editor">
        <h3>Free, open, simple</h3>
        <p>Blogr is a free and open source application backed by a large <br/> community of helpful developers. It supports features such as code <br/> syntax highlighting, RSS feeds, social media integration, third-party <br/>commenting tools, and works seamlessly with Google Analytics. The <br/> architecture is clean and is relatively easy to learn.</p>

        <h3>Powerful tooling</h3>
        <p>Batteries included. We built a simple and straightforward CLI tool that <br/> makes customization and deployment a breeze, but capable of <br/> producing even the most complicated sites.</p>
      </article>
    </div>
  </section>
</main>
  )
}

export default Main