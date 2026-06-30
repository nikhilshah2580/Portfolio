const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-cyan-400/20 bg-linear-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-8 text-center shadow-xl shadow-cyan-900/30 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Get In Touch
          </p>
          <div className="mx-auto mt-4 h-px w-24 bg-cyan-400/50" />
          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
            I’m always interested in new opportunities and collaborations.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you have a question or a project proposal, I would love to hear from you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:shahnikhil98198@gmail.com"
              className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400"
            >
              Send me an email
            </a>
            <a
              href="https://github.com/nikhilshah2580"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
            >
              Connect on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
