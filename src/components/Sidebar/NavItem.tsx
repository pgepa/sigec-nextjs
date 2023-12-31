import { ChevronDown } from "lucide-react";
import { ElementType } from "react";
export interface NavItemProps {
  title: string;
  icon: ElementType;
};

export function NavItem({ title, icon: Icon }: NavItemProps){
  return (
    <a href="" className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-red-50">
        <Icon className="h-5 w-5 text-zinc-500" />
        <span className="font-medium text-zinc-700 group-hover:text-red-600">
          {title}
        </span>
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-red-300" />
    </a>
  )
}