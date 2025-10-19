import { Button } from "@/components/ui/button";
import Image from "next/image";
import {UserButton} from '@clerk/nextjs'

export default function Home() {
  return (
   <div>
    <h2>App-Page.js</h2>
    <Button>CLick Me</Button>
    <UserButton />
   </div>
  );
}
