import React from 'react';
import {
  Text,
  Header,
  ThemeIcon,
  ActionIcon,
  Group,
  useMantineColorScheme,
} from '@mantine/core';
import { MoonStars, Photo, Sun } from 'tabler-icons-react';
import style from './Header.module.css';

export const HeaderContent = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Header className={style.flexRowContainer} height={60} p="xs">
      <Group
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
        position="left"
        my="xl"
      >
        <Group position="left" my="xl">
          <ThemeIcon radius="xl" style={{ margin: 10 }}>
            <Photo size={18} />
          </ThemeIcon>
          <Text weight={700}>QA Framework</Text>
        </Group>
        <Group position="right" my="xl">
          <ActionIcon
            onClick={() => toggleColorScheme()}
            size="lg"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.yellow[4]
                  : theme.colors.blue[6],
            })}
          >
            {colorScheme === 'dark' ? (
              <Sun size={18} />
            ) : (
              <MoonStars size={18} />
            )}
          </ActionIcon>
        </Group>
      </Group>
    </Header>
  );
};
