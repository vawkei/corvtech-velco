import type { ChangeEvent } from "react";

export interface LayoutProp {
  children: React.ReactNode;
 
};

export interface CardProps{
  children:React.ReactNode;
  className?:string
}

export interface SearchProps{
  type:string;
  placeholder:string;
  value:string;
  onChange:(event:ChangeEvent<HTMLInputElement>)=>void
}

export interface SearchProps{
    
    // type?:string
    // placeholder?:string
    // value:string,
    // onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}
