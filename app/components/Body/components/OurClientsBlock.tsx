import { FC } from 'react';
import {
  Flex as OurClientsBox,
  Flex as OurClientsIconsBox,
  Heading as OurClientsTitle,
  Text as OurSpan,
  Text as ClientsSpan,
} from '@chakra-ui/react';
import {
  ATandT,
  AutoImmune,
  Inc,
  PolarBeverages,
  Visa,
  Gap,
} from '@components/icons';
import { COLORS } from '@utils/constants';

export const OurClientsBlock: FC = () => {
  return (
    <OurClientsBox flexDirection={'column'} gap={'22px'} paddingX={'38px'}>
      <OurClientsTitle as={'h3'} fontSize={'24px'} fontWeight={600}>
        <OurSpan as={'span'} color={COLORS.BLACK}>
          OUR
        </OurSpan>{' '}
        <ClientsSpan as={'span'} color={COLORS.ACCENT}>
          CLIENTS
        </ClientsSpan>
      </OurClientsTitle>
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
