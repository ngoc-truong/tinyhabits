import { FlatList, StyleSheet, View } from "react-native";
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
  {
    id: "lesson4",
    overline: "Lesson 4",
    title: "Why is psychology important?",
    description:
      "Can psychology and science give you the answer to create long lasting habits?",
    imageUrl: "",
    completed: false,
  },
  {
    id: "lesson5",
    overline: "Lesson 5",
    title: "Why is psychology important?",
    description:
      "Can psychology and science give you the answer to create long lasting habits?",
    imageUrl: "",
    completed: false,
  },
  {
    id: "lesson6",
    overline: "Lesson 6",
    title: "Why is psychology important?",
    description:
      "Can psychology and science give you the answer to create long lasting habits?",
    imageUrl: "",
    completed: false,
  },
  {
    id: "lesson7",
    overline: "Lesson 7",
    title: "Why is psychology important?",
    description:
      "Can psychology and science give you the answer to create long lasting habits?",
    imageUrl: "",
    completed: false,
  },
  {
    id: "lesson8",
    overline: "Lesson 8",
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
