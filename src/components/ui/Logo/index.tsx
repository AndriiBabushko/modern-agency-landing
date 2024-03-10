import { FC } from 'react';
import {
  Flex as LogoContainer,
  Heading as BrandTitle,
  Text as Lispum,
  Text as Media,
} from '@chakra-ui/react';
import { Leaf } from '@components/icons';

export const Logo: FC = () => {
  return (
    <LogoContainer flexDirection={'row'} gap={'15px'}>
      <Leaf />
      <BrandTitle as={'h1'} fontSize={'41px'}>
        <Lispum as={'span'} fontWeight={'bold'}>
          Lispum
        </Lispum>{' '}
        <Media as={'span'} fontWeight={'normal'}>
          Media
        </Media>
      </BrandTitle>
    </LogoContainer>
  );
};
