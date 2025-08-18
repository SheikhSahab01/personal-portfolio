import { PageInfo } from "@/typings";
import { getBaseUrl } from "./getBaseUrl";

export const fetchPageInfo= async () => {
     const req = await fetch(`${getBaseUrl()}/api/getPageInfo`,{
          cache : "no-store"
      });
     const data = await req.json();
     const pageInfo : PageInfo = data.pageInfo;
     // console.log(pageInfo);
     return pageInfo;
}