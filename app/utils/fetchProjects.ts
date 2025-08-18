import { Projects } from "@/typings";

export const fetchProject= async () => {
     const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`,{
          cache : "no-store"
      });
     const data = await req.json();
     const projects : Projects[] = data.projects;
     // console.log(projects);
     return projects;
}