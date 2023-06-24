import type { PropsWithChildren } from 'react';

import { ConfigProvider, theme } from 'antd';
import heIL from 'antd/locale/he_IL';

import useTheme from './useTheme';

const CustomAntdProvider = ({ children }: PropsWithChildren) => {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const isDarkMode = useTheme((state) => state.isDarkMode);

  return (
    <ConfigProvider
      locale={heIL}
      direction="rtl"
      theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}>
      {children}
    </ConfigProvider>
  );
};

export default CustomAntdProvider;
