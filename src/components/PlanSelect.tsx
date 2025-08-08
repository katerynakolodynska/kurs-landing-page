import { Listbox } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const plans = ["Basic", "Pro", "VIP"];

interface PlanSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PlanSelect({ value, onChange }: PlanSelectProps) {
  const [selected, setSelected] = useState<string>(value || plans[0]);

  const handleChange = (val: string) => {
    setSelected(val);
    onChange(val);
  };

  return (
    <Listbox value={selected} onChange={handleChange}>
      <div className="relative">
        <Listbox.Button className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none">
          {selected}
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </span>
        </Listbox.Button>
        <Listbox.Options className="absolute mt-1 w-full rounded-lg bg-white shadow-lg z-10 border border-gray-200 max-h-60 overflow-auto">
          {plans.map((plan) => (
            <Listbox.Option
              key={plan}
              value={plan}
              className={({ active }) =>
                `cursor-pointer select-none px-4 py-2 ${
                  active ? "bg-cyan-100 text-cyan-900" : "text-gray-900"
                }`
              }
            >
              {({ selected }) => (
                <div className="flex justify-between items-center">
                  <span>{plan}</span>
                  {selected && <Check className="w-4 h-4 text-cyan-600" />}
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
