import { FC } from 'react';
import { COLORS } from '@utils/constants';
import {
  Box as VideoBox,
  Box as TitleBox,
  Flex as YellowBox,
  Flex as ProjectContent,
  Flex as VideoDescription,
  Flex as VideoContent,
  Flex as YellowContent,
  Heading as TitleHeading,
  Heading as ProjectDescHeading,
} from '@chakra-ui/react';
import { DescriptionBlock } from './DescriptionBlock';

export const YellowBlock: FC = () => {
  return (
    <YellowBox
      flexDirection={'column'}
      gap={'28px'}
      backgroundColor={COLORS.ACCENT}
      width={'100%'}
      paddingX={'54px'}
      paddingY={'24px'}
    >
      <TitleBox>
        <TitleHeading as={'h1'}>Title</TitleHeading>
      </TitleBox>
      <YellowContent flexDirection={'row'} gap={'36px'} width={'100%'}>
        <VideoContent flexDirection={'row'} width={'75%'}>
          <VideoBox width={'75%'}>Video</VideoBox>
          <VideoDescription
            flexDirection={'column'}
            gap={'15px'}
            width={'25%'}
            backgroundColor={COLORS.BLACK}
          >
            <DescriptionBlock title={'Client'} description={'Jommy'} />
            <DescriptionBlock
              title={'Project Description'}
              description={
                'olor massa hac auctor! Ac, mauris massa. Sit pellentesque ridiculus pid, scelerisque augue amet parturient?'
              }
            />
            <DescriptionBlock title={'Software'} description={'Photoshop'} />
            <DescriptionBlock
              title={'Level of service'}
              description={'Photoshop'}
            />
          </VideoDescription>
        </VideoContent>
        <ProjectContent
          minWidth={'25%'}
          backgroundColor={COLORS.WHITE}
        ></ProjectContent>
      </YellowContent>
    </YellowBox>
  );
};
