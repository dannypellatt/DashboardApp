"use client"; 

import React from 'react';

interface ProjectCardProps {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  longDescription: string;
  softwareUsed?: string[];
  outcomes?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, imageSrc, title, description, longDescription, softwareUsed, outcomes }) => {
  return (
    <div id={id} className="card carousel-item w-full bg-white rounded-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
      
      <div className="card-body mx-2 md:mx-8 ">
        <div className="">
          <div className="">
          <h2 className="card-title text-2xl md:text-4xl font-semibold pb-4">{title}</h2>
          <p className="text-xl md:text-2xl font-normal">{description}</p>
          </div>
          
          <p className="pt-8">{longDescription} </p>
        </div>
    </div>
    <div>
      <figure>
        <img className="" src={imageSrc} alt={title} />
      </figure>
    </div>
    </div>
  );
};

export default ProjectCard;