import React from "react";
import CategoryTab from "./CategoryTab";
import * as styles from "../../styles/categorybar.module.css";

/**
 * All possible categories to sort by of the projects as string enum
 */
export enum ECategories
{
    All = "All",
    Cplusplus = "C++",
    CSharp = "C#",
    JS = "JavaScript",
    TS = "TypeScript",
    Py = "Python",
    Misc = "Misc"
}


type CategoryProps = {
    currentCategory: ECategories;
    setCategory(category : ECategories): void;
}


/**
 * This component renders all the categorytabs and gives them the appropriate props.
 * @param props takes in ECategory of the current selected category,and the set function to change the category.
 * Which are forwarded to the tab components.
 */
export const CategoryBar = (props : CategoryProps) => {

return(
    <div className={styles.categoryScrollDiv}>
    <CategoryTab categoryType={ECategories.All} currentCategory={props.currentCategory} setCategory={props.setCategory}></CategoryTab>
    <CategoryTab categoryType={ECategories.CSharp} currentCategory={props.currentCategory} setCategory={props.setCategory}></CategoryTab>
    <CategoryTab categoryType={ECategories.Cplusplus} currentCategory={props.currentCategory} setCategory={props.setCategory}></CategoryTab>
    <CategoryTab categoryType={ECategories.JS} currentCategory={props.currentCategory} setCategory={props.setCategory}></CategoryTab>
    <CategoryTab categoryType={ECategories.TS} currentCategory={props.currentCategory} setCategory={props.setCategory}></CategoryTab>
    <CategoryTab categoryType={ECategories.Py} currentCategory={props.currentCategory} setCategory={props.setCategory}></CategoryTab>
    <CategoryTab categoryType={ECategories.Misc} currentCategory={props.currentCategory} setCategory={props.setCategory}></CategoryTab>
    </div>
    )
}

