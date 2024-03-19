import { MobileNavBar } from '@lobehub/ui';
import { Typography } from 'antd';
import { memo } from 'react';

import ShareAgentButton from '../../features/ShareAgentButton';

const Header = memo(() => {
  const MobileLogo = () => (
    <Typography.Title level={4} style={{ marginBottom: 0 }}>
      Chat2Hub
    </Typography.Title>
  );
  return <MobileNavBar center={<MobileLogo />} right={<ShareAgentButton mobile />} />;
});

export default Header;
