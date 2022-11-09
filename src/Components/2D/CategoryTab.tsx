import React from "react";
import { ECategories } from "./CategoryBar";
import * as styles from "../../styles/categorybar.module.css";


type CategoryProps = {
    currentCategory: ECategories;
    categoryType: ECategories;
    setCategory(category : ECategories): void;

}

/**
 *  This component consists of a button which works to change the category to this owning category.
 * @param props Takes in the ECategory of current category and the setfunction for it.
 * Takes also in the ECategory of which category this component is made into.
 */
const CategoryTab = (props: CategoryProps) => {

    const categoryType : ECategories = props.categoryType;
    const bActive : boolean = props.currentCategory === categoryType;
    
return(
    <button onClick={() => props.setCategory(categoryType)} className={bActive ? styles.categoryTabActivated : styles.categoryTab}>
    {categoryType.toString()}
    </button>
    )
}

export default CategoryTab;