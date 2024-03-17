import { ChatHeader } from '@lobehub/ui';
import { Typography } from 'antd';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';

import ShareAgentButton from '../../features/ShareAgentButton';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const Header = memo(() => {
  const { styles } = useStyles();

  return (
    <ChatHeader
      left={
        <Link aria-label={'home'} href={'/'}>
          <div style={{ alignItems: 'center', display: 'flex', marginTop: 4 }}>
            <Typography.Title className={styles.logo} level={3} style={{ marginBottom: 0 }}>
              Chat2Hub
            </Typography.Title>
            &nbsp;&nbsp;
            <Typography.Text style={{ fontSize: '22px' }}>Discover</Typography.Text>
          </div>
        </Link>
      }
      right={<ShareAgentButton />}
    />
  );
});

export default Header;
