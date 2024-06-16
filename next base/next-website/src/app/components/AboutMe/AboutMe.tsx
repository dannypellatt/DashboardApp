import React from 'react';

const AboutMeSection = () => {
  return (
    <div className="my-16 mx-8 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
        <div className="mx-auto">
          <div>
          <h1 className='mt-4 mb-8 text-5xl md:text-5xl font-semibold'>
            About Me.
          </h1>
          </div>
          <div>
          <div className="carousel carousel-center max-w-md space-x-4 rounded-box mt-8">
            <div className="carousel-item w-full">
                <div className="card w-100 bg-base-100">
                  <figure><img src="/banjoAndMeCoding.JPG" alt="Coding with my dog" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Latest Adventures in Coding</h2>
                    <p>In recent years, I’ve been lucky enough to work with some amazing people (and one very cute dog) on diverse projects. Part developer, part product manager, I’ve used my business and coding expertise to help companies create successful solutions. <strong>Scroll right to see my whole story.</strong></p>
                  </div>
                </div>
            </div> 
            <div className="carousel-item w-full">
              <div className="card w-100 bg-base-100 shadow-xl">
              <figure><img src="/gradphoto.jpeg" alt="Graduation photo" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">From Rocks to Rock 'n' Roll</h2>
                    <p>Growing up in the south of England, I was the first in my family to attend college. While studying, I discovered a love for software through analyzing geophysical data. Although I graduated in 2014 with a BS in Geology, my path took an unexpected turn shortly after when I was signed as a singer-songwriter, allowing me to play music around the world.</p>
                  </div>
              </div>
          </div> 
          <div className="carousel-item w-full">
              <div className="card w-100 bg-base-100">
                <figure><img src="/MeMusic.jpg" alt="Playing music" /></figure>
                <div className="card-body">
                  <h2 className="card-title">The Accidental Developer</h2>
                  <p>After a few years writing and performing, I returned to England and started my own music business, which led me to learn <i>just enough </i>HTML, CSS, and JavaScript to build my own website. This hands-on experience sparked a new passion for web development, and I began helping friends and family with their web projects.</p>
                </div>
              </div>
          </div> 
          <div className="carousel-item w-full">
              <div className="card w-100 bg-base-100 shadow-xl">
                <figure><img src="/movingToAmerica.jpeg" alt="Moving to America" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Stars, Stripes, and Syntax</h2>
                  <p>In 2021, I got my green card and moved to the US, ready for a new career. I realized that the creativity, perseverance, and continuous learning that fueled my love of music were the same qualities needed in software development. This insight motivated me to dive deeper into coding.</p>
                </div>
              </div>
          </div> 
          <div className="carousel-item w-full">
              <div className="card w-100 bg-base-100 shadow-xl">
                <figure><img src="/gandalf.jpeg" alt="Gandalf" /></figure>
                <div className="card-body">
                  <h2 className="card-title">A Coding Makeover</h2>
                  <p>Determined to transition into tech, I immersed myself in online courses and attended a bootcamp. Here, I mastered ASP.NET Core, C#, SQL, Git, OOP, TDD, debugging, and web development. It was a challenging but rewarding journey, building a solid foundation for my new career.</p>
                </div>
              </div>
          </div> 
          <div className="carousel-item w-full">
              <div className="card w-100 bg-base-100 shadow-xl">
                <figure><img src="/MeComputer.JPG" alt="Me at a Computer" /></figure>
                <div className="card-body">
                  <h2 className="card-title">It's Official Mum, I'm a Developer!</h2>
                  <p>After bootcamp, I quickly landed a job as a .NET full-stack developer. My education didn't stop there — I pursued certifications in React, Python, JavaScript, TypeScript, and more. This commitment to continuous learning keeps me adaptable and ready for new challenges, and allows me to create impactful software solutions.</p>
                </div>
              </div>
          </div> 
          </div>
          </div>

          <div className='py-6'>
            <button className="btn btn-xs btn-lg bg-base-100 border border-black text-black float-right rounded-full hover:text-base-100 hover:bg-black">See my resume</button>
          </div>
          
          

        </div>

        <div class-name="">
            <div>
                <p className="mt-4 mb-8">
                  Full stack <strong>Software Developer & Product Manager</strong> with extensive experience designing, planning, developing, and launching software. I've had the privilege of working on some amazing products, at various <strong>veterinary companies</strong>, a <strong>software start up</strong>, a <strong>financial trust company</strong>, and more.
                  Over the years, I've used many different tools and techniques, some of the most memorable include:
                </p>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Development" defaultChecked={true}/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <ul>
                        <li className="mb-4"><strong>Languages: </strong>HTML5, CSS3, JavaScript, TypeScript, C#, Python</li>
                        <li className="mb-4"><strong>Frameworks: </strong>React, Angular, Vue, Bootstrap/Tailwind CSS, Blazor/MudBlazor</li>
                        <li className="mb-4"><strong>Database Management: </strong>SQL (MySQL, PostgreSQL), NoSQL (MongoDB, AirTable), ORMs (Entity Framework)</li>
                        <li className=""><strong>Technologies: </strong>ASP.NET, .NET Core, Node.js, Express.js</li>
                    </ul>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="DevOps"/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <ul>
                        <li className="mb-4"><strong>Practices: </strong>Restful APIs, authentication and authorization (OAuth, JWT), continuous integration/continuous deployment (CI/CD), debugging (Chrome DevTools, Visual Studio Debugger), unit testing (nUnit, Postman)</li>
                        <li className=""><strong>Architecture: </strong> Microservices, Cloud services (AWS, Azure), Containerization (Docker, Kubernetes)</li>
                    </ul>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Processes" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div>
                        <ul>
                            <li className=""><strong>Practices: </strong>Agile methodologies, Scrum, Kanban, CI/CD, sprint planning & retrospectives, roadmapping, prioritization, user stories, OKRs</li>
                        </ul>
                    </div>
                </div>
            </div>
        <div>
        <p className="mt-8 mb-6">On a more personal note, my passions include:</p>
        <ul className="ml-4">
              <li className="mb-4">
                <strong>Learning</strong> - Isn't <em>everything</em> fascinating!? In 2021 I won
                a tv quiz show due to a penchant for (previously) useless general knowledge.
              </li>
              <li className="mb-4">
                <strong>Music</strong> - I play 7 instruments and love to write songs.
              </li>
              <li className="mb-4">
                <strong>Nature &amp; Travel</strong> - I've visited 12 US national parks, 42 states and over 30 countries.
              </li>
              <li className="mb-4">
                <strong>Food &amp; Cooking</strong> - I promise not all English food is terrible...
                just most of it.
              </li>
              <li className="mb-4">
                <strong>Dogs</strong> - All dogs. Small dog? Lovely. Big Dog? Amazing. Just let
                me pet them. I have a very loving German Shorthaired Pointer
                called Banjo. <label htmlFor="my_modal_7" className="text-blue-700 cursor-pointer hover:text-blue-400">(Puppy Tax)</label>
              </li>
            </ul>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <img src="/banjoAndMeCoding.JPG" alt="Coding with my dog" />
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
            </div>
        </div>

      </div>      
  );
};

export default AboutMeSection;