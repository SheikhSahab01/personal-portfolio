import {Skills} from "@/typings";
import { getBaseUrl } from "./getBaseUrl";

export const fetchSkill = async () => {
    const req = await fetch(`${getBaseUrl()}/api/getSkills`,{
        cache : "no-store"
    });
    const data = await req.json();
    const skills: Skills[] = data.skills;
    // console.log(skills);
    return skills;
}