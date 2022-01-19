import React from "react";
import { Button, Paragraph, Tag } from "../components";
import { Htag } from "../components/Htag/Htag";

export default function Home(): JSX.Element {
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
    </>
  );
}
