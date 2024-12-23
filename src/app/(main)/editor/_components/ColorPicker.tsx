import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PaletteIcon } from "lucide-react";
import React, { useState } from "react";
import { Color, ColorChangeHandler } from "react-color";
interface ColorPickerProps {
  color: Color | undefined;
  onChange: ColorChangeHandler;
}
export default function ColorPicker({ color, onChange }: ColorPickerProps) {
  const [showPopover, setShowPopover] = useState(false);
  return (
    <Popover open={showPopover} onOpenChange={setShowPopover}>
      <PopoverTrigger asChild>
        <Button>
          <PaletteIcon className="size-5" />
        </Button>
      </PopoverTrigger>
    </Popover>
  );
}
