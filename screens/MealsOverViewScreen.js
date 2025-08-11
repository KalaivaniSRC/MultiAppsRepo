import { useLayoutEffect } from "react";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    function selectMealHandler() {
      navigation.navigate('MealDetail', { mealId: item.id });
    }

    return (
      <MealItem
        id={item.id} 
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onPress={selectMealHandler} 
      />
    );
  }

  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  );
}

export default MealsOverViewScreen;
