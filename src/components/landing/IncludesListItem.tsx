// todo: fix jest when it tries to import dynamic icons
import {DynamicIcon} from "lucide-react/dynamic";
import type {IncludesItem} from "@/components/landing/IncludesList";

type IncludesItemProps = {
  item: IncludesItem
}

export default function IncludesListItem({item: {title, description, icon}}: IncludesItemProps) {
  return (
    <div className="flex gap-4 max-w-md">
      <DynamicIcon name={icon} className="text-brand-red flex-shrink-0 mt-1" aria-hidden="true" size={30}/>
      <div>
        <h3 className="font-oswald font-medium text-button uppercase text-landing-text-primary">
          {title}
        </h3>
        <p className="mt-2 text-sm text-landing-text-secondary">
          {description}
        </p>
      </div>
    </div>
  )
}