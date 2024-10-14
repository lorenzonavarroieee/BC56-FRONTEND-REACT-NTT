interface ButtonProps {
    text: string;
    onPress: () => void;
}

export default function ButtonComponent({text,onPress}: ButtonProps){
    return(
        <button onClick={onPress}>{text}</button>
    )
}