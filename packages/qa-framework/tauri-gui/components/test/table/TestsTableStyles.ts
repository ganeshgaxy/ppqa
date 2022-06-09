import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
  backAvatar: {
    color: theme.colorScheme === 'dark' ? theme.colors.cyan : theme.colors.blue,
  },
}));
