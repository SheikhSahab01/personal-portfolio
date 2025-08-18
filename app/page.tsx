import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Skillscomp from "@/components/Skillscomp";
import Projectscomp from "@/components/Projectscomp";

import { Experience, PageInfo, Projects, Skills, Social } from "@/typings";
import { fetchPageInfo } from "./utils/fetchPageInfo";
import { fetchExperience } from "./utils/fetchExperience";
import { fetchSocial } from "./utils/fetchSocial";
import { fetchProject } from "./utils/fetchProjects";
import { fetchSkill } from "./utils/fetchSkills";
type Props = {
  pageInfo: PageInfo[];
  experience: Experience[];
  skills: Skills[];
  projects: Projects[];
  socials: Social[];
};

const Home = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const skills: Skills[] = await fetchSkill();
  const mProjects: Projects[] = await fetchProject();
  const socials: Social[] = await fetchSocial();

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
      
      <Header socials = {socials}/>
    
      <section id="hero" className="snap-start">
        <Hero pageInfo = {pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo = {pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experience = {experience} />
      </section>

      <section id="skills" className="snap-start">
        <Skillscomp skills = {skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projectscomp mProjects = {mProjects} />
      </section>

      <section id="contact" className="snap-center">
        <Contact pageInfo = {pageInfo} />
      </section>

      <Footer pageInfo = {pageInfo} />
      
    </div>
  );
};
export default Home;