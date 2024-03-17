import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · Chat2Hub` : 'Chat2Hub';
  }, [title]);

  return null;
});

export default PageTitle;
