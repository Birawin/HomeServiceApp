"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "./_components/details/header";
import Hero from "./_components/details/hero";
import CategoryList from "./_components/details/CategoryList";
import { useEffect } from "react"; 

export default function Home() {

  useEffect(()=>{
    getCategoryList();
  }, [])

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      console.log(resp.categories);
    })
  }
  return (
    <>
      <Header/>
      <Hero/>
      <CategoryList/>
    </>
  );
}
