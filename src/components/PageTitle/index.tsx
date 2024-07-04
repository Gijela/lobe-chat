import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · Chat2hub` : 'Chat2hub';
  }, [title]);

  return null;
});

export default PageTitle;
