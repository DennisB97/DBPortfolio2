import React from "react";
import { CategoryBar, ECategories } from "./CategoryBar";
import * as styles from "../../styles/categorybar.module.css";


interface categoryProps{
    currentCategory: ECategories;
    categoryType: ECategories;
    setCategory(category : ECategories): void;

}


const CategoryTab = (props: categoryProps) => {

    const categoryType = props.categoryType;
    const bActive : boolean = props.currentCategory === categoryType;
    

return(
    <button onClick={() => props.setCategory(categoryType)} className={bActive ? styles.categoryTabActivated : styles.categoryTab}>
    {categoryType.toString()}
    </button>
    )
}

export default CategoryTab;