
type variant= "primary"|"secondary";

export interface Buttonprops{
    variant:variant,
    size:"sm"|"md"|"lg",
    text:String,
    startIcon?:any,
    endIcon?:any,
    onClick?:() => void;
    fullWidth?:boolean;
}

const VariantStyles = {
    "primary":"bg-indigo-500 text-white",
    "secondary":"bg-indigo-200 text-indigo-600"
}

const defaultStyles="rounded-md flex cursor-pointer"

const sizeStyles={
    "sm":"py-1 px-2",
    "md":"py-2 px-4",
    "lg":"py-4 px-6"
}

export const Button= ({variant,size,text,startIcon,onClick,fullWidth}: Buttonprops) => {
    return <button onClick={onClick} className={`${VariantStyles[variant]} ${defaultStyles} ${fullWidth?" w-full flex justify-center items-center":""} ${sizeStyles[size]} "flex items-center py-2 "`} >{startIcon} {text}</button>
}

