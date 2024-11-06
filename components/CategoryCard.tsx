import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface CategoryCardProps {
  icon: LucideIcon | string;
  name: string;
}

export default function CategoryCard({ icon: Icon, name }: CategoryCardProps) {
  return (
    <div className="category-card aspect-square flex flex-col justify-center items-center border-2 hover:border-none border-gray-200 rounded p-6 text-center cursor-pointer group hover:bg-primary">
  {typeof Icon === "string" ? (
    <Image 
      src={Icon} 
      alt={name} 
      width={64} 
      height={64} 
      className="mx-auto mb-3 group-hover:brightness-0 group-hover:invert transition-all"
    />
  ) : (
    <Icon className="w-8 h-8 mx-auto mb-3 transition-colors group-hover:text-white" />
  )}
  <span className="transition-colors group-hover:text-white">{name}</span>
</div>
  );
}