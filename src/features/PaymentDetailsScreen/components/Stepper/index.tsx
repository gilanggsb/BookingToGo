import React, {FC} from 'react';
import styles from './styles';
import {MainView} from '@components/MainView';
import {MainText} from '@components/MainText';
import {ThemeColors} from '@type/context';
import {IStepperData} from '@type/global';

type Props = {
  themeColors: ThemeColors;
} & IStepperData;

const Stepper: FC<Props> = ({themeColors, stepNumber, title, isActive}) => {
  return (
    <MainView style={styles.container}>
      <MainView
        alignItems="center"
        paddingVertical={14}
        flexDirection="row"
        gap={8}>
        <MainView
          style={[
            {
              backgroundColor: isActive
                ? themeColors.primary.base
                : themeColors.dark.neutral40,
            },
            styles.circleNumber,
          ]}>
          <MainText color={themeColors.white} fontSize={18} fontWeight={'600'}>
            {stepNumber}
          </MainText>
        </MainView>
        <MainText
          color={isActive ? undefined : themeColors.dark.neutral60}
          fontSize={16}>
          {title}
        </MainText>
      </MainView>
    </MainView>
  );
};

export default Stepper;
