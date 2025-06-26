import {Skills} from "@/typings";

export const fetchSkill = async () => {
    const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`,{
        cache : "no-store"
    });
    const data = await req.json();
    const skills: Skills[] = data.skills;
    // console.log(skills);
    return skills;
}