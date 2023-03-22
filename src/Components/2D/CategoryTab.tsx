import React from 'react';
import * as styles from '../../styles/categorybar.module.css';

interface CategoryProps {
  currentCategory: string;
  categoryType: string;
  setCategory(category: string): void;
};

/**
 *  This component consists of a button which works to change the category to this owning category.
 * @param currentCategory Takes in the string of current category.
 * @param categoryType Takes in the string of this categorytab represents.
 * @param setCategory Takes in the function which changes the active category.
 * Takes also in the ECategory of which category this component is made into.
 */
const CategoryTab = ({
  currentCategory,
  categoryType,
  setCategory,
}: CategoryProps) => {
  const category: string = categoryType;
  const bActive: boolean = currentCategory === categoryType;

  return (
    <button
      onClick={() => setCategory(category)}
      className={bActive ? styles.categoryTabActivated : styles.categoryTab}
    >
      {category.toString()}
    </button>
  );
};

export default CategoryTab;
