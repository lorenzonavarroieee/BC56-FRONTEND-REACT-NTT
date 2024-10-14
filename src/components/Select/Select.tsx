import { Category } from "../../entities/category"

interface SelectProps{
    categories: Category[];
    handleChange: () => {};
}

export default function SelectComponent({categories, handleChange}: SelectProps){
    <div className="input-field">
        <select value="" onChange={handleChange}>
            {categories.map((e,index) => <option key={index} value={e.slug}>{e.slug}</option>)}
        </select>
    </div>
}