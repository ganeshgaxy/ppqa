import React from 'react';
import { Navbar, Tooltip, UnstyledButton } from '@mantine/core';
import Router from 'next/router';
import { DeviceDesktop, Home2, Icon, Stack2 } from 'tabler-icons-react';
import { useStyles } from './NavbarStyles';

interface MainNavLinkProps {
  icon: Icon;
  label: string;
  route: string;
}

const mainNavLinks: MainNavLinkProps[] = [
  { icon: Home2, label: 'Home', route: '/' },
  { icon: Stack2, label: 'Suites', route: '/suites' },
  { icon: DeviceDesktop, label: 'Explore', route: '/explore' },
];

export const NavbarContent = () => {
  const { classes, cx } = useStyles();
  const [opened, setOpened] = React.useState(false);
  const [active, setActive] = React.useState('Home');
  const switchNavMenu = (link: MainNavLinkProps): void => {
    setActive(link.label);
    Router.push(link.route);
  };

  const mainLinks = mainNavLinks.map((link: MainNavLinkProps) => {
    return (
      <Tooltip
        label={link.label}
        position="right"
        withArrow
        transitionDuration={0}
        key={link.label}
      >
        <UnstyledButton
          onClick={() => switchNavMenu(link)}
          className={cx(classes.mainLink, {
            [classes.mainLinkActive]: link.label === active,
          })}
        >
          <link.icon />
        </UnstyledButton>
      </Tooltip>
    );
  });

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 76, lg: 76 }}
    >
      {mainLinks}
    </Navbar>
  );
};
