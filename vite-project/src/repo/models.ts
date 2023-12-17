export type Advertise = {
     id:number;
     ad_type: "sell"| "buy";
     title:string;
     description:string;
     image:string;
     price:number
 }
 export type OldStateType =
  | {
      pageParams: any; // The type for pageParams, adjust it based on the actual structure
      pages: Array<{
        results: Array<any>; // The type for results, adjust it based on the actual structure
        // Other properties if any
      }>;
      // Other properties if any
    }
  | undefined; // The type can also be undefined if no data is present in the cache