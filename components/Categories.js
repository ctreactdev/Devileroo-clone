import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="TESTING 1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="TESTING 2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="TESTING 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="TESTING 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="TESTING 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="TESTING 3"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="TESTING 3"
      />
    </ScrollView>
  );
};

export default Categories;
