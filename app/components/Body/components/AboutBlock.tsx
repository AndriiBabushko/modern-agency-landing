'use client';

import React, { FC } from 'react';
import {
  Flex as AboutContainer,
  Heading as OurServicesText,
  Heading as DidYouKnowText,
  Heading as ContactText,
  List as ServicesList,
  List as ContactList,
  Text as OurSpan,
  Text as ServicesSpan,
  Text as DidYouSpan,
  Text as KnowSpan,
  Text as DidYouKnowDesc,
} from '@chakra-ui/react';
import { COLORS } from '@utils/constants';
import { AboutBox } from './AboutBox';
import { ServiceListItem } from './ServiceListItem';
import { ContactListItem } from './ContactListItem';
import { Phone, Fax, Envelope, Home } from '@components/icons';
import { ContactListText } from './ContactListText';
import { ReadMoreButton } from '@components/ui';

export const AboutBlock: FC = () => {
  return (
    <AboutContainer
      marginBottom={'20px'}
      borderBottomColor={COLORS.GRAY}
      borderBottomWidth={1}
      borderTopColor={COLORS.GRAY}
      borderTopWidth={1}
    >
      <AboutBox width={'30%'}>
        <OurServicesText as={'h3'} fontSize={'24px'} fontWeight={600}>
          <OurSpan as={'span'} color={COLORS.BLACK}>
            OUR
          </OurSpan>{' '}
          <ServicesSpan as={'span'} color={COLORS.ACCENT}>
            SERVICES
          </ServicesSpan>
        </OurServicesText>
        <ServicesList display={'flex'} flexDirection={'column'} gap={'12px'}>
          <ServiceListItem text={'Ac tristique sagittis turpis'} />
          <ServiceListItem text={'Duis mus nec portitor'} />
          <ServiceListItem text={'Phasellus lectus cras'} />
          <ServiceListItem text={'Ac tristique sagittis turpis'} />
          <ServiceListItem text={'Ac tristique sagittis turpis'} />
          <ServiceListItem text={'Ac tristique sagittis turpis'} />
        </ServicesList>
      </AboutBox>
      <AboutBox width={'40%'}>
        <DidYouKnowText as={'h3'} fontSize={'24px'} fontWeight={600}>
          <DidYouSpan as={'span'} color={COLORS.BLACK}>
            DID YOU
          </DidYouSpan>{' '}
          <KnowSpan as={'span'} color={COLORS.ACCENT}>
            KNOW
          </KnowSpan>
        </DidYouKnowText>
        <DidYouKnowDesc color={COLORS.BLACK} fontSize={'16px'}>
          Ac tristique sagittis turpis dis purus egestasi Duis mus nec porttitor
          hac ac dictumst. portfitor eros adipiscing elementum fincidunt uma mus
          portfitor odio, non fris- tique adipiscing lorem, sed nec vel
          adipiscing sit. quis platea parturient sit adipiscing et massa. Risus,
          placerat. Augue etiam et dis velit ut. auctor et. duis dolor nunc
          nunc, augue nisi nascetur, porta
        </DidYouKnowDesc>
        <ReadMoreButton />
      </AboutBox>
      <AboutBox width={'30%'} isCorners={false}>
        <ContactText as={'h3'} color={COLORS.ACCENT} fontSize={'24px'}>
          CONTACT
        </ContactText>
        <ContactList display={'flex'} flexDirection={'column'} gap={'12px'}>
          <ContactListItem
            text={<ContactListText text={'203-810-4300'} isBold />}
            icon={<Phone />}
          />
          <ContactListItem
            text={<ContactListText text={'203-810-4333'} isBold />}
            icon={<Fax />}
          />
          <ContactListItem
            text={<ContactListText text={'Contact@lipsum.com'} />}
            icon={<Envelope />}
          />
          <ContactListItem
            text={
              <>
                <ContactListText text={'Il 50 washington streeh'} />
                <ContactListText text={'Sute 1043'} />
                <ContactListText text={'lipsume 10644'} />
              </>
            }
            icon={<Home />}
          />
        </ContactList>
      </AboutBox>
    </AboutContainer>
  );
};
