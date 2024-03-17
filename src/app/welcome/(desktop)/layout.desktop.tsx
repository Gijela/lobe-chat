'use client';

import { Typography } from 'antd';
import { PropsWithChildren, memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import AppLayoutDesktop from '@/layout/AppLayout.desktop';

import { useStyles } from '../features/Banner/style';

const Desktop = memo<PropsWithChildren>(({ children }) => {
  const { styles } = useStyles();
  return (
    <AppLayoutDesktop>
      <Center
        className={styles.layout}
        flex={1}
        height={'100%'}
        horizontal
        style={{ position: 'relative' }}
      >
        <Typography.Title
          className={styles.logo}
          level={3}
          style={{ marginBottom: 0, marginTop: 4 }}
        >
          Chat2Hub
        </Typography.Title>
        <Flexbox className={styles.view} flex={1}>
          {children}
        </Flexbox>
      </Center>
    </AppLayoutDesktop>
  );
});

export default Desktop;
