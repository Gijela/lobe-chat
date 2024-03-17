import { Icon, Logo } from '@lobehub/ui';
import { Typography } from 'antd';
import { Loader2 } from 'lucide-react';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

const FullscreenLoading = memo<{ title?: string }>(({ title }) => {
  return (
    <Flexbox height={'100%'} style={{ userSelect: 'none' }} width={'100%'}>
      <Center flex={1} gap={12} width={'100%'}>
        <Logo
          extra={
            <Typography.Title level={2} style={{ marginBottom: 0 }}>
              Chat2Hub
            </Typography.Title>
          }
          size={48}
          type={'flat'}
        />
        <Center gap={16} horizontal style={{ padding: '0 32px' }}>
          <Icon icon={Loader2} spin />
          {title}
        </Center>
      </Center>
    </Flexbox>
  );
});

export default FullscreenLoading;
