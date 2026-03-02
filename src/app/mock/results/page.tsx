import React from 'react';

export default function ResultsMockPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-sans text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#0f49bd1a] px-6 md:px-20 py-4 bg-[#f6f6f8] dark:bg-[#101622] sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-[#0f49bd]">
              <span className="material-symbols-outlined text-3xl">auto_stories</span>
              <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">LiteraryMatch AI</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-slate-600 dark:text-slate-400 hover:text-[#0f49bd] transition-colors text-sm font-medium" href="#">Home</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-[#0f49bd] transition-colors text-sm font-medium" href="#">My Library</a>
              <a className="text-[#0f49bd] text-sm font-bold border-b-2 border-[#0f49bd]" href="#">Discover</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-[#0f49bd] transition-colors text-sm font-medium" href="#">Quiz</a>
            </nav>
          </div>
          <div className="flex flex-1 justify-end gap-6 items-center">
            <label className="hidden lg:flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-200/50 dark:bg-slate-800/50">
                <div className="text-slate-500 flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 px-3 text-sm placeholder:text-slate-500" placeholder="Search books..." />
              </div>
            </label>
            <div className="h-10 w-10 rounded-full bg-[#0f49bd33] flex items-center justify-center text-[#0f49bd] overflow-hidden border-2 border-[#0f49bd33]">
              <div className="bg-center bg-no-repeat aspect-square bg-cover size-full" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1ePpBSUdw4aJHllWwiexFISFe-2kj3Wt3REpCItlFVTVvf_NimS04dTh1VhHcszsXu2JpxLQGD9eyF3nnRTeX_4jDqbZqA7wk3zLabJpezVIHnCDGesMxw4Nyz0LuSxIWbAtVe-xMojwLZWjSAMV2Ka6JxUOvSfxe4Oz_DVxATYPL3sc2hAoQ-PplRu-mMCrs5hIPhBXBUNjNpPC14eXdr_9qUNi8eu1nPBVSWbO70BGgtmSLt4zG-sx-GS4BaKuCmc2ouzP6-o7b")' }}></div>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto w-full px-6 md:px-10 py-10">
          <div className="mb-12">
            <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">Your Personalized Literary Match</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">We've analyzed your reading habits and preferences to find stories that resonate with your soul.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-28">
                <div className="flex items-center gap-3 mb-4 text-[#0f49bd]">
                  <span className="material-symbols-outlined">psychology</span>
                  <h3 className="text-xl font-bold">Personality Profile</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-900 dark:text-slate-100 font-semibold text-lg">The Introspective Explorer</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    You gravitate towards complex character studies, historical settings, and lyrical prose. Your quiz results suggest a preference for philosophical themes and non-linear narratives.
                  </p>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Attributes</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#0f49bd1a] text-[#0f49bd] text-xs font-bold rounded-full">Atmospheric</span>
                      <span className="px-3 py-1 bg-[#0f49bd1a] text-[#0f49bd] text-xs font-bold rounded-full">Character Driven</span>
                      <span className="px-3 py-1 bg-[#0f49bd1a] text-[#0f49bd] text-xs font-bold rounded-full">Historical</span>
                      <span className="px-3 py-1 bg-[#0f49bd1a] text-[#0f49bd] text-xs font-bold rounded-full">Melancholic</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 flex items-center justify-center gap-2 rounded-lg h-12 bg-[#0f49bd] text-white text-sm font-bold hover:bg-[#0f49bd]/90 transition-all">
                    <span className="material-symbols-outlined text-lg">refresh</span>
                    Retake Quiz
                  </button>
                </div>
              </div>
            </aside>

            <section className="lg:col-span-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0f49bd]">auto_awesome</span>
                  Curated For You
                </h2>
                <span className="text-sm font-medium text-slate-500">Sorted by match %</span>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "The Shadow of the Wind",
                    author: "Carlos Ruiz Zafón",
                    match: "98%",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7pUWLYCpUmGGIvB62B0vAn_ZTr3V1fyh096MNTevT8yKstCOiyW6dUg0kGQTfFpNkao_LyF-oyrJmSQmtbePuBjF9f2md8sDHksf8xMiBWgLthAuyDOKDSejuVSR_3NHTKCSGOm96eCUWaX4fCCf9iIB7X_cxomw3vyGfSAdiKR7FjjQbMEafvfnLi4u08FOc7fKd2BGG2LQS4goN2eCKEZu98JDpi3Mkt6CGUMTqfR37XwM_728kd1fQLr5TLK4mkBYVfTIccxai",
                    why: "This atmospheric mystery aligns with your love for gothic settings and bibliophilic themes."
                  },
                  {
                    title: "Circe",
                    author: "Madeline Miller",
                    match: "94%",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQnYlN3Ea6lTfGyaAaOdUq2DjV2lKOiIdjbbGUXGiJzEWwrMbniWrZf1-oEqMU7ZA6DSYHFq_zSl9zUiwxETCC9pRyvpZSy7rdtN4ysav0cmGiIHUpxm-SwM-dKWk9hUEjixOaPMMaEQ_WkLyqkLB5E732O1NLKxX4zHpKCSsiehVPg7LUtekJFjQDAnAVTYvbe3a7MoKBc3_tjAKt-GQrWR4Z0vhfGIjg5C4Lw09TKsNaRYfN3Z4ZjCC4K48ZPeMosF_Y_tn6HrQ-",
                    why: "Your interest in lyrical prose and complex mythological reinterpretations makes this a perfect fit."
                  },
                  {
                    title: "Pachinko",
                    author: "Min Jin Lee",
                    match: "89%",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXJnk3-POR2iBM-QjeBZ_rqYfUum_SENrwxpRh_HrKsRWfqkBn0h2YQxvQv1pIFRVw9MGB_D7w57K1kGfOPs1FYDLzsGAZI-Kamm2ZAmSKWlZxrgWhgRHipbnV2VxdRvyAQW_MdlAxHIkRzuTtT5BfOpDg4JPEqE7sB0xsnkwMU879TC2gx-_06In6ENJuvbugdkXmD6odq3Jy5Ge6FtkTo4ibsq45en1JIvEJMrKG8WjiNZRu1KV0-ZZIYlQlKfibyLE-SzQ_lQ2e",
                    why: "For your appreciation of sweeping historical epics that delve deep into cultural identity and family legacy."
                  }
                ].map((book, idx) => (
                  <div key={idx} className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
                    <div className="md:w-1/3 aspect-[3/4] md:aspect-auto relative overflow-hidden">
                      <div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${book.img}")` }}></div>
                      <div className="absolute top-4 left-4 bg-[#0f49bd] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{book.match} Match</div>
                    </div>
                    <div className="p-6 md:w-2/3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">{book.title}</h3>
                        <p className="text-[#0f49bd] font-medium mb-4">{book.author}</p>
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border-l-4 border-[#0f49bd]">
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1 uppercase tracking-tighter">Why we picked this:</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400 italic">"{book.why}"</p>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-1 text-amber-500">
                          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">4.9</span>
                          <span className="text-xs text-slate-500 ml-1">(2.1k reviews)</span>
                        </div>
                        <button className="bg-[#0f49bd1a] text-[#0f49bd] px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#0f49bd] hover:text-white transition-all">View Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <footer className="border-t border-slate-200 dark:border-slate-800 mt-20 py-10">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-2 text-[#0f49bd] mb-4">
              <span className="material-symbols-outlined text-2xl">auto_stories</span>
              <span className="font-bold">LiteraryMatch AI</span>
            </div>
            <p className="text-slate-500 text-sm">Empowering readers with AI-driven discovery. © 2024 LiteraryMatch Inc.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
