import React from "react";
import { Button, Paragraph, Rating, Tag } from "../components";
import { Htag } from "../components/Htag/Htag";
import { useState } from "react";
import { withLayout } from "../layout/layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
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
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}
export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
