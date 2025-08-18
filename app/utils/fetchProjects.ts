import { Projects } from "@/typings";
import { getBaseUrl } from "./getBaseUrl";

export const fetchProject= async () => {
     const req = await fetch(`${getBaseUrl()}/api/getProjects`,{
          cache : "no-store"
      });
     const data = await req.json();
     const projects : Projects[] = data.projects;
     // console.log(projects);
     return projects;
}