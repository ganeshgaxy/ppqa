import {
  Anchor,
  Badge,
  Checkbox,
  Group,
  Paper,
  ScrollArea,
  Table,
  TextInput,
  Text,
  Button,
  Avatar,
  ActionIcon,
  Menu,
} from '@mantine/core';
import React from 'react';
import {
  ChevronLeft,
  Copy,
  EyeCheck,
  Messages,
  Note,
  Pencil,
  ReportAnalytics,
  Search,
  Square,
  Trash,
} from 'tabler-icons-react';
import { useStyles } from './TestsTableStyles';
import { Th } from './Th';
import Router from 'next/router';

interface RowData {
  suite: string;
  path: string;
  test: string;
  id: string;
}

interface TableSelectionProps {
  headers: { label: string; name: string }[];
  suite: string;
  data: RowData[];
}

function filterData(data: RowData[], search: string) {
  const keys = Object.keys(data[0]);
  const query = search.toLowerCase().trim();
  return data.filter((item: any) =>
    keys
      .filter((key) => key !== 'id')
      .some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData; reversed: boolean; search: string }
) {
  if (!payload.sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[payload.sortBy].localeCompare(a[payload.sortBy]);
      }

      return a[payload.sortBy].localeCompare(b[payload.sortBy]);
    }),
    payload.search
  );
}

export const TestsTableContent = ({
  headers,
  suite,
  data,
}: TableSelectionProps) => {
  const [search, setSearch] = React.useState('');
  const { classes, theme, cx } = useStyles();
  const [selection, setSelection] = React.useState<string[]>([]);
  const [sortedData, setSortedData] = React.useState(data);
  const [sortBy, setSortBy] = React.useState<any>(undefined);
  const [reverseSortDirection, setReverseSortDirection] = React.useState(false);

  const setSorting = (field: any) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length ? [] : data.map((item) => item.id)
    );

  const columns = headers.map((header: { label: string; name: string }) => {
    return (
      <Th
        sorted={sortBy === header.name}
        reversed={reverseSortDirection}
        onSort={() => setSorting(header.name)}
        key={header.name}
      >
        {header.label}
      </Th>
    );
  });

  const rows = sortedData.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item.id)}
            transitionDuration={0}
          />
        </td>
        <td>
          <Group spacing="sm">
            <Square size={16} color={theme.colors.blue[5]} />
            <Text size="sm" weight={400}>
              {item.test}
            </Text>
          </Group>
        </td>
        <td>
          <Text color="dimmed" size="sm" weight={400}>
            {item.suite}
          </Text>
        </td>
        <td>
          <Group spacing={0} position="left">
            <ActionIcon
              onClick={() =>
                Router.push(
                  `/test?testName=${item.test}&suiteName=${item.suite}&filePath=${item.path}`
                )
              }
            >
              <EyeCheck size={16} />
            </ActionIcon>
            <Menu transition="pop" withArrow placement="end">
              <Menu.Item icon={<Pencil size={16} />}>Edit test</Menu.Item>
              <Menu.Item icon={<Copy size={16} />}>Duplicate</Menu.Item>
              <Menu.Item icon={<ReportAnalytics size={16} />}>
                Analytics
              </Menu.Item>
              <Menu.Item icon={<Trash size={16} />} color="red">
                Delete Test
              </Menu.Item>
            </Menu>
          </Group>
        </td>
      </tr>
    );
  });

  return (
    <Paper shadow="xs" radius="xs" p="sm">
      <Group spacing="sm">
        <Avatar className={classes.backAvatar}>
          <ChevronLeft
            className={classes.backAvatar}
            onClick={() => {
              Router.push(`/suites`);
            }}
          />
        </Avatar>
        <Text size="lg" weight={500}>
          Tests
        </Text>
      </Group>
      <Text size="sm" color="dimmed" mt={3} mb="xl">
        {`List of all Tests in ${suite}`}
      </Text>
      <ScrollArea>
        <TextInput
          placeholder="Search by any field"
          mb="md"
          icon={<Search size={14} />}
          value={search}
          onChange={handleSearchChange}
        />
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th style={{ width: 40 }}>
                <Checkbox
                  onChange={toggleAll}
                  checked={selection.length === data.length}
                  indeterminate={
                    selection.length > 0 && selection.length !== data.length
                  }
                  transitionDuration={0}
                />
              </th>
              {columns}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </Paper>
  );
};
