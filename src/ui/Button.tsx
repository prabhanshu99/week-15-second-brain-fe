type variant= "primary"|"secondary";

export interface Buttonprops{
    variant:variant,
    size:"sm"|"md"|"lg",
    text:String,
    startIcon?:any,
    endIcon?:any,
    onClick:() => void;
}

const VariantStyles = {
    "primary":"bg-indigo-500 text-white",
    "secondary":"bg-indigo-200 text-indigo-600"
}

const defaultStyles="rounded-md flex"

const sizeStyles={
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6"
}

export const Button= (props: Buttonprops) => {
    return <button className={`${VariantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} "flex items-center"`} >{props.startIcon} {props.text}</button>
}

<Button variant="primary" size="lg" onClick={() => {}} text="Add Content"/>