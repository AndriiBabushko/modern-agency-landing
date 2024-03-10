import React, { FC } from 'react';
import {
  Flex as SearchInputContainer,
  Input,
  Text as SubscribeText,
} from '@chakra-ui/react';
import { COLORS } from '@utils/constants';

export const SearchInput: FC = () => {
  return (
    <SearchInputContainer
      flexDirection={'row'}
      gap={'10px'}
      paddingBottom={'4px'}
    >
      <Input backgroundColor={COLORS.WHITE} height={'20px'} borderRadius={0} />
      <SubscribeText
        fontFamily={'Century Gothic'}
        color={COLORS.BLACK}
        fontSize={'14px'}
        fontWeight={400}
      >
        SUBSCRIBE
      </SubscribeText>
    </SearchInputContainer>
  );
};
