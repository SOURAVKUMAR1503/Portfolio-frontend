
import React from "react";
import { useNavigate } from "react-router-dom";

import BlogProfileImage from "../assets/Blog Website Design.jpg";
import CSS from "../assets/css-3.png";
import HTML from "../assets/html.png";
import DB from "../assets/data-server.png";
import JS from "../assets/js.png";
import REACTICON from "../assets/physics.png";
import NODE from "../assets/node-js.png";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import BlogImage from "../assets/blogImage.png";

function Home() {
  const navigate = useNavigate();

  const skills = [
    { name: "HTML5", icon: HTML },
    { name: "CSS3", icon: CSS },
    { name: "JavaScript", icon: JS },
    { name: "React", icon: REACTICON },
    { name: "Database", icon: DB },
    { name: "Node.js", icon: NODE },
  ];

  const projects = [
    { title: "Project One", image: P1, number: "01" },
    { title: "Project Two", image: P2, number: "02" },
    { title: "Project Three", image: P3, number: "03" },
  ];

  return (
    <main className="overflow-hidden bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative px-6 py-16 sm:px-10 md:py-24 lg:px-20">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-purple-100/60 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 md:flex-row md:justify-between">

          <div className="w-full text-center md:w-3/5 md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Welcome to my portfolio
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Hi! I Am
              <span className="mt-2 block text-orange-500">
                Sourav Kumar
              </span>
            </h1>

            <h2 className="mt-5 text-xl font-semibold text-gray-700 sm:text-2xl">
              Full Stack Web Developer
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-gray-500 sm:text-lg md:mx-0">
              I create beautiful, responsive and user-friendly websites
              that bring ideas to life. Let's build something amazing
              together and turn your vision into reality.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                className="rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 transition duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-orange-300"
              >
                Hire Me <span className="ml-2">↗</span>
              </a>

              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="rounded-xl border border-gray-200 bg-white px-7 py-3.5 font-semibold text-gray-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:text-orange-500"
              >
                View Projects
              </button>
            </div>

            <div className="mt-10 flex justify-center gap-10 md:justify-start">
              <div>
                <h3 className="text-3xl font-extrabold text-purple-600">
                  06+
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Projects Completed
                </p>
              </div>

              <div className="h-14 w-px bg-gray-200" />

              <div>
                <h3 className="text-3xl font-extrabold text-green-600">
                  06+
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Months of Experience
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center md:w-2/5">
            <div className="absolute inset-4 rounded-full bg-orange-200 blur-3xl opacity-60" />

            <div className="relative rounded-[2rem] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-purple-50 p-3 shadow-2xl shadow-orange-100/70">
              <img
                src={BlogProfileImage}
                alt="Sourav Kumar portfolio"
                className="h-64 w-64 rounded-[1.5rem] object-cover sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              />

              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl">
                <p className="text-xs text-gray-500">
                  Passionate about
                </p>
                <p className="mt-1 font-bold text-orange-500">
                  Design & Development ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-gray-100 bg-gray-50/80 px-6 py-14 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            My Tech Stack
          </p>

          <h2 className="mt-3 text-center text-2xl font-extrabold sm:text-3xl">
            Technologies I Work With
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white px-4 py-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/60"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 transition group-hover:bg-orange-50">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-9 w-9 object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-600 transition group-hover:text-orange-500">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-500">
              WHAT I OFFER
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              My Awesome
              <span className="block text-orange-500">Services.</span>
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-gray-500">
              I combine creativity and technology to build websites
              that look impressive, work smoothly and deliver a great
              user experience across all devices.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-gray-100 p-4 transition hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-600">
                  ✦
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">
                    Web Development
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Responsive and modern websites built for your needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-gray-100 p-4 transition hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600">
                  ◈
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">
                    Frontend Development
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Clean interfaces with interactive user experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-gray-100 p-4 transition hover:border-green-200 hover:shadow-lg hover:shadow-green-50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl text-green-600">
                  ⌘
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">
                    Backend & Database
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Functional applications with reliable data handling.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-orange-500"
            >
              Download My CV ↓
            </a>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-purple-100" />

            <div className="relative rounded-3xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/60 sm:p-9">
              <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                <div>
                  <p className="text-sm text-gray-500">A little about me</p>
                  <h3 className="mt-1 text-xl font-extrabold">
                    My Journey
                  </h3>
                </div>
                <span className="rounded-xl bg-orange-100 px-4 py-3 text-2xl">
                  🚀
                </span>
              </div>

              <div className="mt-7 space-y-7">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-600">
                    01
                  </span>
                  <div>
                    <h4 className="font-bold">Learn & Explore</h4>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Learning modern technologies and improving my skills.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                    02
                  </span>
                  <div>
                    <h4 className="font-bold">Build & Create</h4>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Turning ideas into practical web projects.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                    03
                  </span>
                  <div>
                    <h4 className="font-bold">Grow & Improve</h4>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Exploring new approaches and building better experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 p-5 text-white">
                <p className="text-sm text-orange-50">
                  My philosophy
                </p>
                <p className="mt-2 text-lg font-bold">
                  Keep learning. Keep building. Keep growing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-gray-50 px-6 py-20 sm:px-10 lg:px-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
              MY PORTFOLIO
            </span>

            <h2 className="mt-6 text-4xl font-extrabold sm:text-5xl">
              My Recent <span className="text-orange-500">Projects.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
              Here are some of my projects. Each one represents an
              opportunity to learn, create and solve problems.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-100/70"
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-1.5 text-sm font-bold text-orange-500 shadow">
                    {project.number}
                  </span>
                </div>

                <div className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Featured work
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-gray-800">
                      {project.title}
                    </h3>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-xl transition group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-6 py-20 sm:px-10 lg:px-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl bg-gradient-to-br from-orange-100 via-orange-50 to-purple-100 p-5 sm:p-8">
              <div className="absolute right-7 top-7 h-16 w-16 rounded-full bg-white/60 blur-xl" />
              <img
                src={BlogImage}
                alt="Technology blogging"
                className="relative mx-auto max-h-96 w-full object-contain transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-600">
              FROM MY KEYBOARD
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              I Like to Write
              <span className="mt-2 block text-orange-500">
                Tech Blogs.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-500">
              Discover my thoughts, tutorials and experiences in web
              development and technology. I share what I learn to help
              others grow along with me.
            </p>

            <button
              onClick={() => navigate("/blogs")}
              className="mt-8 rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-100 transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              Read My Blogs <span className="ml-2">↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 pb-20 sm:px-10 lg:px-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gray-900 px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Let's connect
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Have an idea? Let's make it happen!
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
              I'm always excited to discuss creative ideas and new projects.
              Let's create something meaningful together.
            </p>

            <a
              className="mt-8 inline-flex rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-400"
            >
              Get In Touch ↗
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
