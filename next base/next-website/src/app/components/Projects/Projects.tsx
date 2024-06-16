import React from 'react';
import ProjectCard from './ProjectsCard';

const projects = [
    {
      id: "project1",
      imageSrc: "/project-imgs/epr.jpg",
      title: "Enterprise Practice Report",
      brief: "Online Directory",
      description: "A subscription-based online database of major players in the pet health industry.",
      longDescription: "I spearheaded the overhaul of the Enterprise Practice Report, evolving it from a static, error-prone PDF into a dynamic, subscription-based online database. By migrating to advanced software, establishing rigorous data integrity protocols, and completely redesigning the user interface, I created a seamless and visually appealing user experience. Leveraging cutting-edge technologies such as web-scraping and AI, I automated data collection and enrichment processes, ensuring up-to-date and accurate information. Additionally, I developed comprehensive company documentation, facilitating smooth operations and future scalability. The result was a highly profitable online resource, now serving over 50,000 subscribers and significantly enhancing their access to critical industry insights.",
      softwareUsed: ["Airtable (database)", "Softr (UX/UI", "CodeChimp (analytics)", "ChatGPT (AI Chatbot)", "Clay (web scraping)", "Notion (team workspace)"],
      outcomes: ["peeps loved it", "a lot"]
    },
    {
      id: "project2",
      imageSrc: "/project-imgs/dataco.jpg",
      title: "DataCo",
      brief: "Integration Platform",
      description: "An integration and migration platform that uniformly presents data from any PIMS source.",
      longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti quis voluptatum dicta ab repellendus ullam explicabo, provident excepturi minus vitae ipsam inventore eaque, recusandae placeat autem architecto magni. Dolorem?",
      softwareUsed: ["React", "Next.js"],
      outcomes: ["peeps loved it", "a lot"]
    },
    {
      id: "project3",
      imageSrc: "/project-imgs/prism-mock.jpg",
      title: "Prism",
      brief: "Pricing Tool",
      description: "A pricing scenario tool that allows retailers to predict revenue before adjusting stock prices.",
      longDescription: "I was part of a small team within a software company creating a tool on behalf of large retail group, with a collection of outlets around the US. It allowed the business to adjust their pricing in different locations depending on local factors, as well as plan sales strategies, and track changes in holistic purchasing habits.",
      softwareUsed: ["Airtable (database)", "Softr (UX/UI", "CodeChimp (analytics)", "ChatGPT (AI Chatbot)", "Clay (web scraping)", "Notion (team workspace)"],
      outcomes: ["peeps loved it", "a lot"]
    },
    {
      id: "project4",
      imageSrc: "/project-imgs/petlog-temp.jpg",
      title: "PetLog",
      brief: "Health Tracker",
      description: "A Proof of Concept app designed to track a pet's health through daily reports.",
      longDescription: "I designed and built the PetLog app for a veterinary practice group interested in exploring its potential use. The app enables users to log various metrics about their pets to detect changes, aid recovery, and preempt illness. I utilized React's Next.js with Tailwind CSS for the front end, connecting to a Postgres database by leveraging React Server Components, achieving fast, dynamic rendering of CRUD operations. It also featured user authentication to support multiple accounts. The app was well received, with positive feedback from the veterinary practice group.",
      softwareUsed: ["Airtable (database)", "Softr (UX/UI", "CodeChimp (analytics)", "ChatGPT (AI Chatbot)", "Clay (web scraping)", "Notion (team workspace)"],
      outcomes: ["peeps loved it", "a lot"]
    },
    {
      id: "project5",
      imageSrc: "/project-imgs/tvcc.jpg",
      title: "The Vintage Crockery Cupboard",
      brief: "Bootstrap Website",
      description: "A simple one page website for an event rental company in England. ",
      longDescription: "",
      softwareUsed: ["HTML/CSS", "Bootstrap", "", "", "", ""],
      outcomes: ["peeps loved it", "a lot"]
    },
    {
      id: "project6",
      imageSrc: "/project-imgs/outlier.jpg",
      title: "Outlier Advisors",
      brief: "Weebly Website",
      description: "A stylish and user-friendly business website created with Weebly, chosen for its intuitive drag-and-drop builder and easy customization, allowing administrator updates.",
      longDescription: "",
      softwareUsed: [""],
      outcomes: [""]
    },
    {
      id: "project7",
      imageSrc: "/project-imgs/ngp.jpg",
      title: "NGP Handyman",
      brief: "HTML/CSS Website",
      description: "A fully responsive and accessible handyman's business website, made with older users in mind.",
      longDescription: "",
      softwareUsed: [""],
      outcomes: [""]
    },
  ];

const Project: React.FC = () => {
  return (
    
    <div className="bg-base-100 w-full pb-16">

            <div role="tablist" className="tabs tabs-lifted border border-red">
                <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Development" defaultChecked={true}/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <div className="bg-white rounded-xl p-4 w-full">
                    <div className="carousel w-full transitionEnter={false}" >
                        {projects.map((project) => (
                            <ProjectCard
                            key={project.id}
                            id={project.id}
                            imageSrc={project.imageSrc}
                            title={project.title}
                            description={project.description}
                            longDescription={project.longDescription}
                            softwareUsed={project.softwareUsed}
                            outcomes={project.outcomes}
                            />
                        ))}
                    </div>        
              </div>
                </div>

                <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="DevOps"/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <ul>
                        <li className="mb-4"><strong>Practices: </strong>Restful APIs, authentication and authorization (OAuth, JWT), continuous integration/continuous deployment (CI/CD), debugging (Chrome DevTools, Visual Studio Debugger), unit testing (nUnit, Postman)</li>
                        <li className=""><strong>Architecture: </strong> Microservices, Cloud services (AWS, Azure), Containerization (Docker, Kubernetes)</li>
                    </ul>
                </div>

                <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Processes" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div>
                        <ul>
                            <li className=""><strong>Practices: </strong>Agile methodologies, Scrum, Kanban, CI/CD, sprint planning & retrospectives, roadmapping, prioritization, user stories, OKRs</li>
                        </ul>
                    </div>
                </div>
            </div>


      
        <div className='ml-36 pt-16 pb-8'>
            <h1 className='text-3xl md:text-5xl font-semibold'>Projects I've worked on.</h1>
        </div>
        <div className='px-16 py-8'>
            
            <div className='flex justify-center gap-8 '>
                            {projects.map((project) => (
                                <a key={project.id} href={`#${project.id}`} className="text-center hover:text-gray-500">
                                <img src={project.imageSrc} alt={project.title} className="w-full h-auto object-cover rounded hover:border-gray-500" />
                                <p className="font-semibold pt-4">{project.brief}</p>
                                </a>
                            ))}
                        </div>    
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-white rounded-xl p-4 w-full">
                    <div className="carousel w-full transitionEnter={false}" >
                        {projects.map((project) => (
                            <ProjectCard
                            key={project.id}
                            id={project.id}
                            imageSrc={project.imageSrc}
                            title={project.title}
                            description={project.description}
                            longDescription={project.longDescription}
                            softwareUsed={project.softwareUsed}
                            outcomes={project.outcomes}
                            />
                        ))}
                    </div>        
              </div>
        </div>
      
    </div>
  );
};

export default Project;