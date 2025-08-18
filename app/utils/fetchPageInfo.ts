import { PageInfo } from "@/typings";

export const fetchPageInfo= async () => {
     const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`,{
          cache : "no-store"
      });
     const data = await req.json();
     const pageInfo : PageInfo = data.pageInfo;
     // console.log(pageInfo);
     return pageInfo;
}