import React from 'react';
import CategoryTab from './CategoryTab';
import * as styles from '../../styles/categorybar.module.css';
import { graphql, useStaticQuery } from 'gatsby';

interface CategoryProps {
  currentCategory: string;
  setCategory(category: string): void;
}

interface MdxNode {
  frontmatter: {
    category: string[];
  };
}

/**
 * This component renders all the categorytabs and gives them the appropriate props.
 * @param currentCategory takes in string name of the current selected category.
 * @param setCategory takes in function that sets new category selected.
 */
export const CategoryBar = ({
  currentCategory,
  setCategory,
}: CategoryProps) => {
  // Queries all the categories from the mdx pages.
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            category
          }
        }
      }
    }
  `);

  var categories: string[] = [];
  data.allMdx.nodes.forEach((node: MdxNode) => {
    node.frontmatter.category.forEach((category: string) => {
      if (!categories.includes(category)) {
        categories.push(category);
      }
    });
  });
  categories.sort();

  return (
    <div className={styles.categoryScrollDiv}>
      {categories.map((category: string) => (
        <CategoryTab
          categoryType={category}
          currentCategory={currentCategory}
          setCategory={setCategory}
        ></CategoryTab>
      ))}
    </div>
  );
};
