import React from "react";
import CategoryTab from "./CategoryTab";
import * as styles from "../../styles/categorybar.module.css";

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


interface categoryProps{
    currentCategory: ECategories;
    setCategory(category : ECategories): void;

}



export const CategoryBar = (props : categoryProps) => {

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

