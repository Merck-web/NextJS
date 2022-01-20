import React from "react";
import { Button, Paragraph, Rating, Tag } from "../components";
import { Htag } from "../components/Htag/Htag";
import { useState } from "react";
import { withLayout } from "../layout/layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow='right'>
        Кнопка
      </Button>
      <Button appearance='ghost' arrow='down'>
        Кнопка
      </Button>
      <Paragraph size='s'>Привет Я текст</Paragraph>
      <Paragraph size='m'>Привет Я текст</Paragraph>
      <Paragraph size='l'>Привет Я текст</Paragraph>
      <Tag size='s' color='green'>
        10 рублей
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </>
  );
}
export default withLayout(Home);
