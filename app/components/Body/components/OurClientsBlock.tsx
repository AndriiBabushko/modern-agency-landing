import { FC } from 'react';
import {
  Flex as OurClientsBox,
  Flex as OurClientsIconsBox,
  Heading as OurClientsTitle,
} from '@chakra-ui/react';
import {
  ATandT,
  AutoImmune,
  Inc,
  PolarBeverages,
  Visa,
  Gap,
} from '@components/icons';

export const OurClientsBlock: FC = () => {
  return (
    <OurClientsBox flexDirection={'column'} gap={'22px'} paddingX={'38px'}>
      <OurClientsTitle>OUR CLIENTS</OurClientsTitle>
      <OurClientsIconsBox
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'flex-end'}
      >
        <ATandT />
        <Inc />
        <AutoImmune />
        <Visa />
        <PolarBeverages />
        <Gap />
      </OurClientsIconsBox>
    </OurClientsBox>
  );
};
