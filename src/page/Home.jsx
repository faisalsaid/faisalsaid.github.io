import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col gap-14  max-w-10xl  mx-auto text-neutral-300">
      <header className="sticky top-0 bg-neutral-800 py-4">
        <div className="flex justify-between items-center sm:max-w-6xl mx-auto px-4 ">
          <a href="#">
            <p className="text-lg text-pink-500">Fais</p>
          </a>
          <nav>
            <ul className="flex gap-4 items-center text-sm">
              <a className=" " href="#hero">
                <li className="underline text-sky-200">Home</li>
              </a>
              <a href="#ido">
                <li className="underline text-sky-200">What I Do</li>
              </a>
              <a className="underline text-sky-200" href="#work">
                <li>My Work</li>
              </a>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO START  */}
      <div id="hero" className=" px-4 mx-auto flex flex-col gap-6 sm:flex-row w-full sm:max-w-6xl items-start">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-3 h-3 bg-green-300 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
          <div className="w-3 h-3 bg-red-400 rounded-full red"></div>
        </div>
        <h1 className="text-3xl sm:text-5xl flex gap-4 flex-1 flex-col ">
          <span>
            👋 Hello, <span className="text-pink-300">I'm Fais,</span>{' '}
          </span>
          <span>a passionate </span>
          <span>front-end developer. </span>
        </h1>
        <img className="h-52 w-52" src="/imagePersonalWeb.png" alt="" />
      </div>

      {/* About */}
      <div id="about" className="px-4 sm:max-w-6xl mx-auto">
        <h2 className="text-green-600">// About Me</h2>
        <p className="pl-8">
          I thrive on turning creative ideas into seamless user experiences. With a keen eye for design and a love for coding, I bring digital concepts to life. My journey into the
          world of web development began <span className="text-pink-600">kantongdarah.com</span>
        </p>
      </div>
      {/* HERO START END  */}

      {/* HERO IDO START  */}
      <img className="w-full sm:max-w-7xl mx-auto" src="/cartoon2.jpg" alt="" />

      <div className="flex flex-col gap-6 sm:flex-row px-4  sm:max-w-6xl mx-auto">
        <div id="ido" className="px-4">
          <h2 className="text-green-600">// What I Do</h2>
          <div className="pl-8 flex flex-col gap-6">
            <div className="">
              <h2 className="text-yellow-300">🚀 **Front-End Development:** </h2>
              <p>
                Transforming designs into interactive and responsive websites is my forte. I specialize in HTML, CSS, and JavaScript, ensuring a seamless and visually appealing
                user interface.
              </p>
            </div>
            <div>
              <h2 className="text-green-300">🎨 **UI/UX Design:** </h2>
              <p>
                Transforming designs into interactive and responsive websites is my forte. I specialize in HTML, CSS, and JavaScript, ensuring a seamless and visually appealing
                user interface.
              </p>
            </div>
            <div>
              <h2 className="text-red-500">🎨🛠️ **Tools & Technologies:** </h2>
              <p>
                Transforming designs into interactive and responsive websites is my forte. I specialize in HTML, CSS, and JavaScript, ensuring a seamless and visually appealing
                user interface.
              </p>
            </div>
          </div>
        </div>
        {/* HERO IDO END  */}
        <div className="w-full ">
          <img className="w-full" src="/code.png" alt="" />
        </div>
        {/* HERO WORK START  */}

        <div id="work" className="px-4">
          <h2 className="text-green-600">// My Work</h2>
          <div className="pl-8 flex flex-col gap-6">
            <div className="">
              <h2 className="text-pink-500">{`{ project : "Kantong Darah" }`}</h2>
              <p>A web-based application that helps people find blood donors.</p>
              <p className="text-sky-200">
                <a className="underline" href="https://gitlab.com/pattileilohyterry/kantongdarah" target="_blank">
                  gitlab kantong darah
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-green-400">{`{ project : "ADMTC" }`} </h2>
              <p>ADMTC, the Agency for the Development and Pooling of Certified Qualifications, base on Franc.</p>
            </div>
            <div>
              <h2 className="text-orange-500">{`{ project : "Kasir Kuliner" }`} </h2>
              <p>Point of sale application that targets medium to small businesses, helps calculate sales revenue and analyze product sales</p>
              <p className="text-sky-200">
                <a className="underline" href="https://kasirkuliner.vercel.app/" target="_blank">
                  Kasir kuliner
                </a>
                <br />
                <a className="underline" href="https://github.com/faisalsaid/food-pos-client" target="_blank">
                  github kasir kuliner
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-purple-300">{`{ project : "API Kasir Kuliner " }`} </h2>
              <p>Kasir kuliner api access and organize database use node.js express and mongosDB</p>
              <p className="text-sky-200">
                <link className="underline" rel="stylesheet" href="https://github.com/faisalsaid/food-pos-client" target="_blank" />
                github API kasir kuliner
              </p>
            </div>
          </div>
        </div>

        {/* HERO WORK END  */}
      </div>

      <img className="w-full sm:max-w-7xl mx-auto" src="/code_on_moon.png" alt="" />

      <div className="flex flex-col gap-14 sm:flex-row sm:gap-4 sm:mb-10 sm:max-w-6xl mx-auto">
        <div id="skill" className="px-4 flex-1">
          <h2 className="text-green-600">// Skills</h2>
          <p className="pl-8">
            <ul>
              <li className="relative">
                - HTML5 & <span className="absolute -top-3 pl-1  hover:text-pink-500 hover:animate-ping transition-all duration-300 text-yellow-300 "> CSS3</span>
              </li>
              <li>- JavaScript (ES6+)</li>
              <li>- React.js</li>
              <li>- Tailwind</li>
              <li>- Node.js</li>
              <li>- Redux</li>
              <li>- Responsive Design</li>
              <li>- UI/UX Design</li>
              <li>- Git & Version Control</li>
            </ul>
          </p>
        </div>

        <div id="contanct" className="px-4 flex-1">
          <h2 className="text-green-600">// Let's Connect</h2>
          <div className="pl-8">
            <p>I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out through ;</p>
            <div className="flex flex-col gap-3 mt-3">
              <span className="text-yellow-200">
                <a href="mailto: falsdesain@gmail.com">falsdesain@gmail.com</a>
              </span>
              <span className="text-green-400">
                <a href="https://github.com/faisalsaid" target="_blank">
                  github.com
                </a>
              </span>
              <span className="text-pink-500">
                <a href="https://dribbble.com/faisalsaid" target="_blank">
                  dribbble.com
                </a>
              </span>
              <span className="text-sky-400">
                <a href="https://www.behance.net/faisalsaid" target="_blank">
                  behance.net
                </a>
              </span>
            </div>
          </div>
        </div>

        <h4 className="text-3xl px-4 mb-8 flex-1">Thank you for visiting! Let's create something amazing together. 🚀</h4>
      </div>
    </div>
  );
}
