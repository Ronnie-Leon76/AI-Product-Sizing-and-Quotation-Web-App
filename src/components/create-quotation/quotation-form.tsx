"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { QuotationOptions } from "@/constants/quotation-items";
import { ItemData } from "./quotationButton";

interface QuotationFormProps {
  onChange: (data: ItemData) => void;
  id: number;
}

const QuotationForm: React.FC<QuotationFormProps> = ({ onChange }) => {
  const [category, setCategory] = useState<string | null>(null);
  const [item, setItem] = useState<string | null>(null);
  const [brandInfo, setBrandInfo] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [runningHours, setRunningHours] = useState<number>(1);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setItem(null);
    setBrandInfo("");
  };

  const handleItemChange = (value: string) => {
    setItem(value);
    setBrandInfo("");
  };

  const selectedCategoryItems = category
    ? QuotationOptions[category].items
    : {};

  useEffect(() => {
    onChange({
      item_name: item || "",
      item_model_name: brandInfo,
      item_quantity: quantity,
      running_hours: runningHours,
    });
  }, [category, item, brandInfo, quantity, runningHours]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* Category Select */}
      <Select onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Category</SelectLabel>
            {Object.keys(QuotationOptions).map((categoryKey) => (
              <SelectItem key={categoryKey} value={categoryKey}>
                {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Item Select */}
      <Select onValueChange={handleItemChange} disabled={!category}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Item" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Item</SelectLabel>
            {category &&
              Object.keys(selectedCategoryItems).map((itemKey) => (
                <SelectItem key={itemKey} value={itemKey}>
                  {itemKey.charAt(0).toUpperCase() + itemKey.slice(1)}
                </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Brand Info Input */}
      <Input
        type="text"
        value={brandInfo}
        onChange={(e) => setBrandInfo(e.target.value)}
        placeholder="Size, brand name, additional info i.e. 32-inch Samsung OLED"
        disabled={!item}
      />

      <div className="flex space-x-4">
        <div className="w-fit flex flex-col">
          <label className="text-sm text-gray-700">Run Hours</label>
          <Input
            type="number"
            min="1"
            value={runningHours}
            onChange={(e) => setRunningHours(parseInt(e.target.value, 10))}
            placeholder="Enter Running Hours"
          />
        </div>

        {/* Quantity Input */}
        <div className="w-fit flex flex-col">
          <label className="text-sm text-gray-700">Quantity</label>
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            placeholder="Enter Quantity"
          />
        </div>
      </div>
    </div>
  );
};

export default QuotationForm;