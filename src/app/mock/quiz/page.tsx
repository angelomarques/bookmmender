import React from 'react';

export default function QuizMockPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-4 font-sans text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-[960px] flex flex-col gap-8">
        {/* Progress Bar Section */}
        <div className="flex flex-col gap-3 px-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[#0f49bd] font-bold text-sm tracking-widest uppercase">Discovery Journey</p>
              <p className="text-slate-900 dark:text-slate-100 text-lg font-medium">Step 2 of 3</p>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal">66% Complete</p>
          </div>
          <div className="rounded-full bg-[#0f49bd1a] h-3 overflow-hidden">
            <div className="h-full rounded-full bg-[#0f49bd]" style={{ width: '66%' }}></div>
          </div>
        </div>

        {/* Questionnaire Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Content: Question & Context */}
          <div className="md:col-span-5 flex flex-col gap-6 p-4">
            <div className="rounded-xl overflow-hidden shadow-xl aspect-square bg-[#0f49bd0d] flex items-center justify-center border border-[#0f49bd1a]">
              <img
                alt="Cozy library with warm lighting"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASJ320TNdYUQpy0-8y9NyHIjzeNjWkOfgz4EzE-qLs-9TuV2o3NvZIzYzNpylYqzPtBcOaJgN4htvkZX2MOYFdiALGTGNyOv6zL5SkngCyCzzFHkKASDc__UhlJg84gx3D39nbHOanwOsfRw_e1zkEKz49IHxj5JdLFChyYLnJZxCJN21BVy9he2rxvUi2Lo8Daa8CPjdYShWpk9BsihOvaXiXlpwQHP5BapaQ47Xgi8x0cC2nG74sTiGVjOHa71JXCIXUahvOLUW_"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight leading-tight">Which of these best describes your ideal weekend?</h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Your leisure preferences tell us a lot about the pace and atmosphere of stories you'll enjoy most.
              </p>
            </div>
          </div>

          {/* Right Content: Selection Options */}
          <div className="md:col-span-7 flex flex-col gap-4 p-4">
            {/* Option 1 */}
            <label className="group cursor-pointer">
              <input defaultChecked className="peer hidden" name="weekend" type="radio" />
              <div className="flex items-center gap-4 p-6 rounded-xl border-2 border-[#0f49bd1a] bg-white dark:bg-slate-900 transition-all peer-checked:border-[#0f49bd] peer-checked:bg-[#0f49bd0d] hover:border-[#0f49bd66]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0f49bd1a] text-[#0f49bd] group-hover:bg-[#0f49bd] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">forest</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 dark:text-slate-100">Quiet cabin in the woods</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Peaceful, introspective, and connected to nature.</p>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-[#0f49bd33] flex items-center justify-center peer-checked:border-[#0f49bd]">
                  <div className="w-3 h-3 rounded-full bg-[#0f49bd] scale-0 transition-transform peer-checked:scale-100"></div>
                </div>
              </div>
            </label>

            {/* Option 2 */}
            <label className="group cursor-pointer">
              <input className="peer hidden" name="weekend" type="radio" />
              <div className="flex items-center gap-4 p-6 rounded-xl border-2 border-[#0f49bd1a] bg-white dark:bg-slate-900 transition-all peer-checked:border-[#0f49bd] peer-checked:bg-[#0f49bd0d] hover:border-[#0f49bd66]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0f49bd1a] text-[#0f49bd] group-hover:bg-[#0f49bd] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">apartment</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 dark:text-slate-100">Bustling city exploration</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Energetic, diverse, and full of new discoveries.</p>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-[#0f49bd33] flex items-center justify-center peer-checked:border-[#0f49bd]">
                  <div className="w-3 h-3 rounded-full bg-[#0f49bd] scale-0 transition-transform peer-checked:scale-100"></div>
                </div>
              </div>
            </label>

            {/* Option 3 */}
            <label className="group cursor-pointer">
              <input className="peer hidden" name="weekend" type="radio" />
              <div className="flex items-center gap-4 p-6 rounded-xl border-2 border-[#0f49bd1a] bg-white dark:bg-slate-900 transition-all peer-checked:border-[#0f49bd] peer-checked:bg-[#0f49bd0d] hover:border-[#0f49bd66]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0f49bd1a] text-[#0f49bd] group-hover:bg-[#0f49bd] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 dark:text-slate-100">High-stakes mystery game</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Thrilling, strategic, and intellectually challenging.</p>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-[#0f49bd33] flex items-center justify-center peer-checked:border-[#0f49bd]">
                  <div className="w-3 h-3 rounded-full bg-[#0f49bd] scale-0 transition-transform peer-checked:scale-100"></div>
                </div>
              </div>
            </label>

            {/* Option 4 */}
            <label className="group cursor-pointer">
              <input className="peer hidden" name="weekend" type="radio" />
              <div className="flex items-center gap-4 p-6 rounded-xl border-2 border-[#0f49bd1a] bg-white dark:bg-slate-900 transition-all peer-checked:border-[#0f49bd] peer-checked:bg-[#0f49bd0d] hover:border-[#0f49bd66]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0f49bd1a] text-[#0f49bd] group-hover:bg-[#0f49bd] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">castle</span>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 dark:text-slate-100">Grand historical tour</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Educational, epic, and rich with cultural heritage.</p>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-[#0f49bd33] flex items-center justify-center peer-checked:border-[#0f49bd]">
                  <div className="w-3 h-3 rounded-full bg-[#0f49bd] scale-0 transition-transform peer-checked:scale-100"></div>
                </div>
              </div>
            </label>

            <div className="mt-6 flex items-center justify-between">
              <button className="flex items-center gap-2 px-6 h-12 rounded-lg text-slate-500 hover:text-[#0f49bd] transition-colors font-medium">
                <span className="material-symbols-outlined">arrow_back</span>
                Back
              </button>
              <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-[#0f49bd] text-white text-base font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* Footer Section: Quick Chips (Sneak peek of step 3) */}
        <div className="px-4 py-8 border-t border-[#0f49bd1a]">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 text-center">Popular themes you might like:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-[#0f49bd1a] text-sm font-medium hover:border-[#0f49bd] transition-colors cursor-default">Philosophical depth</span>
            <span className="px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-[#0f49bd1a] text-sm font-medium hover:border-[#0f49bd] transition-colors cursor-default">Fast-paced action</span>
            <span className="px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-[#0f49bd1a] text-sm font-medium hover:border-[#0f49bd] transition-colors cursor-default">Complex relationships</span>
            <span className="px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-[#0f49bd1a] text-sm font-medium hover:border-[#0f49bd] transition-colors cursor-default">World-building</span>
            <span className="px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-[#0f49bd1a] text-sm font-medium hover:border-[#0f49bd] transition-colors cursor-default">True stories</span>
          </div>
        </div>
      </div>
    </div>
  );
}
