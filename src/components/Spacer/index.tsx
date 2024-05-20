import React, {FC} from 'react';
import styles from './styles';
import {MainView} from '@components/MainView';

type Props = {size?: number};

const Spacer: FC<Props> = ({size}) => {
  return <MainView style={{flex: size || 1}} />;
};

export default Spacer;
