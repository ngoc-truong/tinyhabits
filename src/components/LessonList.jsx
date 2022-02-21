import { FlatList, StyleSheet } from "react-native";
import Lesson from "./Lesson";

const lessons = [
  {
    id: "lesson1",
    overline: "Lesson 1",
    title: "How and when does behavior occur?",
    description:
      "The Fogg Behavior Model explains how and under which circumstance behavior occur. It is pretty simple.",
    imageUrl: "",
    completed: true,
  },
  {
    id: "lesson2",
    overline: "Lesson 2",
    title: "What are habits?",
    description:
      "Learn about how habits are generated and how tiny habits can change your life.",
    imageUrl: "",
    completed: true,
  },
  {
    id: "lesson3",
    overline: "Lesson 3",
    title: "Why is psychology important?",
    description:
      "Can psychology and science give you the answer to create long lasting habits?",
    imageUrl: "",
    completed: false,
  },
];

const LessonList = () => {
  const renderLesson = ({ item }) => {
    return (
      <Lesson
        overline={item.overline}
        completed={item.completed}
        title={item.title}
        description={item.description}
      />
    );
  };

  return <FlatList renderItem={renderLesson} data={lessons} />;
};

export default LessonList;
