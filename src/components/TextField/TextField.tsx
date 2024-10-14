interface TextInputProps{
    placeholder: string;
    onKeyPress: () => void
}

export default function TextInputComponent({placeholder, onKeyPress}: TextInputProps){
    return(
        <input placeholder={placeholder} onKeyDown={onKeyPress} />
    )
}