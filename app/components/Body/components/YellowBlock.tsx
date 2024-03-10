'use client';

import React, { FC } from 'react';
import { COLORS } from '@utils/constants';
import {
  Box as VideoBox,
  Box as TitleBox,
  Box as RecommendationVideoBox,
  Box as ProjectDescriptionBox,
  Flex as YellowBox,
  Flex as ProjectContent,
  Flex as VideoDescription,
  Flex as VideoContent,
  Flex as YellowContent,
  Flex as ProjectDescriptionContainer,
  Heading as TitleHeading,
  Heading as ProjectDescHeading,
  Heading as FeaturedText,
  Text as ProjectDescriptionText,
} from '@chakra-ui/react';
import { DescriptionBlock } from './DescriptionBlock';
import Image from 'next/image';
import PandaImage from '@assets/panda.png';
import ProjectDescImage from '@assets/project-desc.png';
import { ReadMoreButton } from '@components/ui';

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
        <TitleHeading
          as={'h1'}
          fontSize={'76px'}
          color={COLORS.BLACK}
          fontWeight={600}
        >
          LIPSUM MEDIA PRESENTATION
        </TitleHeading>
      </TitleBox>
      <YellowContent flexDirection={'row'} gap={'36px'} width={'100%'}>
        <VideoContent flexDirection={'row'} width={'75%'}>
          <VideoBox width={'65%'} position={'relative'}>
            <FeaturedText
              zIndex={1}
              position={'absolute'}
              top={5}
              left={-7}
              backgroundColor={COLORS.TRANSPARENT_BLACK}
              paddingX={'8px'}
              paddingY={'12px'}
              as={'h6'}
              color={COLORS.WHITE}
              fontWeight={400}
              fontSize={'28px'}
              fontStyle={'italic'}
            >
              Featured projects
            </FeaturedText>
            <RecommendationVideoBox
              zIndex={1}
              position={'absolute'}
              bottom={3}
              left={6}
              width={'80px'}
            >
              <Image src={PandaImage} alt={'Panda'} />
            </RecommendationVideoBox>
            <RecommendationVideoBox
              zIndex={1}
              position={'absolute'}
              bottom={3}
              left={120}
              width={'80px'}
            >
              <Image src={PandaImage} alt={'Panda'} />
            </RecommendationVideoBox>
            <RecommendationVideoBox
              zIndex={1}
              position={'absolute'}
              bottom={3}
              left={220}
              width={'80px'}
            >
              <Image src={PandaImage} alt={'Panda'} />
            </RecommendationVideoBox>
            <Image src={PandaImage} alt={'Panda'} fill={true} />
          </VideoBox>
          <VideoDescription
            flexDirection={'column'}
            gap={'15px'}
            width={'35%'}
            backgroundColor={COLORS.BLACK}
            padding={'28px'}
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
          flexDirection={'column'}
          alignItems={'flex-start'}
          width={'25%'}
          backgroundColor={COLORS.WHITE}
        >
          <ProjectDescHeading
            paddingX={'8px'}
            paddingY={'4px'}
            as={'h3'}
            color={COLORS.BLACK}
            fontWeight={600}
            fontSize={'22px'}
          >
            PROJECT DESCRIPTION
          </ProjectDescHeading>
          <Image src={ProjectDescImage} alt={'Project descriotion image'} />
          <ProjectDescriptionContainer
            height={'100%'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            gap={'12px'}
            paddingX={'12px'}
            paddingY={'16px'}
          >
            <ProjectDescriptionBox>
              <ProjectDescriptionText
                as={'p'}
                color={COLORS.BLACK}
                fontSize={'14px'}
                fontWeight={400}
              >
                Ac aliquam pid amet, lorem eu, etiam ultrices, egestas. Et
                porttitor a, lacus egestas est rhoncus, egestas arnet facilisis
                augue pellentesque. Nec? Velit tristique. Proin facilisis porta
                porttitor in tortor vel
              </ProjectDescriptionText>
            </ProjectDescriptionBox>
            <ReadMoreButton />
          </ProjectDescriptionContainer>
        </ProjectContent>
      </YellowContent>
    </YellowBox>
  );
};
