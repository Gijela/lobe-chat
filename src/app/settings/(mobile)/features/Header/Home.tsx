import { MobileNavBar } from '@lobehub/ui';
import { Typography } from 'antd';
import { memo } from 'react';

const Header = memo(() => {
  const MobileLogo = () => (
    <Typography.Title level={4} style={{ marginBottom: 0 }}>
      Chat2Hub
    </Typography.Title>
  );
  return <MobileNavBar center={<MobileLogo />} />;
});

export default Header;
