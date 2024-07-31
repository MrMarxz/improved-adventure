import { Button } from "../ui/button";
import { type Button as ButtonType } from "~/utils/types";

interface HeaderButtonGroupProps {
    buttons: ButtonType[];
}

export function HeaderButtonGroup({ buttons }: HeaderButtonGroupProps) {
    
    return (
        <div className="flex flex-row justify-between space-x-2 p-2">
            {buttons.map((button, index) => (
                <Button key={index} onClick={button.onClick} variant="link" className="flex justify-between gap-x-2" >
                    {button.icon}
                    <span>{button.label}</span>
                </Button>
            ))}
        </div>
    );
}
