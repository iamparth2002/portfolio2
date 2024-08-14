import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  image?: string;

}

export function SkillCard({
  title,
  image,

}: Props) {
  return (
    <Card
      className={
        "flex flex-col items-center justify-center overflow-hidden cursor-pointer transition-all duration-300 ease-out h-30 w-30 p-1"
      }
    >

      <Image
        src={image || "/default-image.png"}
        alt={title}
        width={44}
        height={44}
        className="w-10 object-cover"
      />


      <p className="text-sm">{title}</p>



    </Card>
  );
}
