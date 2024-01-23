import {FC, InputHTMLAttributes, ReactNode} from "react";
import {classes} from "src/utils/helper";
import Label from "../label";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    leftElement?: ReactNode;
    rightElement?: ReactNode;
    inputClassName?: string
    label?: string
};

const Input: FC<Props> = ({className, name, inputClassName, leftElement, rightElement, label, ...props}) => {
    return (
        <div>
            {label && <Label htmlFor={name}
                             className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </Label>}
            <div
                className={classes(className, 'px-3 py-2 rounded-lg space-x-3 bg-indigo-100', 'flex items-center focus-within:border-primary border border-transparent')}
                aria-hidden aria-label="input">
                {leftElement}
                <input  {...props} name={name}
                        className={classes(inputClassName, 'appearance-none outline-none border-none bg-indigo-100 flex-1')}/>
                {rightElement}
            </div>
        </div>
    )
};

export default Input;
