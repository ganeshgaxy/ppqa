import {
  Anchor,
  Avatar,
  Badge,
  Checkbox,
  Group,
  Paper,
  ScrollArea,
  Table,
  Text,
  TextInput,
} from '@mantine/core';
import React from 'react';
import { ListDetails, Search } from 'tabler-icons-react';
import { useStyles } from './TableStyles';
import { Th } from './Th';
import Router from 'next/router';

interface RowData {
  suite: string;
  path: string;
  file: string;
  tests: string;
  id: string;
}

interface TableSelectionProps {
  headers: { label: string; name: string }[];
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

export const SuiteTableContent = ({ headers, data }: TableSelectionProps) => {
  const [search, setSearch] = React.useState('');
  const { classes, theme, cx } = useStyles();
  const [selection, setSelection] = React.useState(['1']);
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
            <ListDetails size={16} color={theme.colors.blue[5]} />
            <Anchor<'a'>
              size="sm"
              onClick={(event: React.MouseEvent<HTMLElement>) =>
                Router.push(`/suites/${item.suite}/${item.path}`)
              }
            >
              {item.suite}
            </Anchor>
          </Group>
        </td>
        <td>
          <Anchor<'a'>
            size="sm"
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              event.preventDefault()
            }
          >
            {item.file}
          </Anchor>
        </td>
        <td>
          <Badge>{item.tests}</Badge>
        </td>
      </tr>
    );
  });

  return (
    <Paper shadow="xs" radius="xs" p="sm">
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
