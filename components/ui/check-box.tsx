type Props = {
    name: string; 
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const CheckBox = ({ name, checked, onChange }: Props) => {
    return <input type="checkbox" name={name} checked={checked} onChange={onChange}/>
}