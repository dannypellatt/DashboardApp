import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div className="bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 pt-16 pb-4">
            <div className='ml-36'>
                <h1 className='text-3xl md:text-5xl text-white font-semibold'>Get in touch.</h1>
                
            </div>

            <div className="flex justify-center items-center space-x-2">
                <div className="stats stats-vertical bg-black text-white">
                    
                    <div className="stat">
                        <div className="stat-title text-white">Location</div>
                        <div className="text-3xl font-semibold">Carlsbad, California</div>
                    </div>
                
                    <div className="stat">
                        <div className="stat-title text-white">Phone</div>
                        <div className="text-3xl font-semibold">(571) 493-0142</div>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-title text-white">Email</div>
                        <div className="text-3xl font-semibold">dannyrpellatt@gmail.com</div>
                    </div>
                
                </div>
            </div>
        </div>
        <div className="bg-black">
            <p className='py-8 text-zinc-500 text-center'>Website made by me. Designed in <span className='text-zinc-400'>Figma & Canva</span>. Coded using <span className='text-zinc-400'>TypeScript</span>, <span className='text-zinc-400'>JavaScript</span>, <span className='text-zinc-400'>HTML5</span>, and <span className='text-zinc-400'>CSS</span> in Visual Studio Code. Built with <span className='text-zinc-400'>React</span>, <span className='text-zinc-400'>Next.js</span> and <span className='text-zinc-400'>Tailwind CSS</span>.</p>
        </div>
    </div>
    
  );
};

export default ContactSection;
