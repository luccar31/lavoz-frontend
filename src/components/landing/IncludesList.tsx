import {IconName} from "lucide-react/dynamic";
import React from "react";
import IncludesListItem from "@/components/landing/IncludesListItem";

export type IncludesItem = {
  icon: IconName,
  title: string,
  description: string
}

type IncludesListProps = {
  items: IncludesItem[]
}

export default function IncludesList({items}: IncludesListProps) {

  // Lógica dinámica para separar los ítems
  const isOdd = items.length % 2 !== 0;
// Si es impar, tomamos todos menos el último para el grid. Si es par, los tomamos todos.
  const gridItems = isOdd ? items.slice(0, -1) : items;
// Si es impar, el último ítem es el que irá centrado. Si es par, no hay ítem centrado.
  const centeredItem = isOdd ? items[items.length - 1] : null;
  
  return (
    <>
      {/* Grid predecible para los ítems en pares */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
        {gridItems.map((item, index) => (
          <IncludesListItem item={item} key={index} />
        ))}
      </div>

      {/* Contenedor separado y centrado para el último ítem, si existe */}
      {centeredItem && (
        <div className="mt-10 flex justify-center">
          <IncludesListItem item={centeredItem}/>
        </div>
      )}
    </>
  )
}