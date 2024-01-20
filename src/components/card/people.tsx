import { Box, Image, Text, Button, VStack, HStack, useColorModeValue } from '@chakra-ui/react';
import { FaUserAlt, FaBirthdayCake } from 'react-icons/fa';

const PersonCard = (props: {
  person: {
    name: string;
    avatar: string;
    birthday: string;
  };
  [x: string]: any
}) => {
  // 用于根据当前的颜色模式调整卡片的背景色
  const cardBg = useColorModeValue('white', 'gray.800');
  const { person } = props; 

  return (
    <Box bg={cardBg} boxShadow="sm" borderRadius="lg" p={4} w="full">
      <HStack spacing={4} align="center">
        {/* 人员头像 */}
        <Image borderRadius="full" boxSize="50px" src={person.avatar} alt={person.name} />
        {/* 人员信息 */}
        <VStack align="start" spacing={1}>
          <HStack spacing={1}>
            <FaUserAlt />
            <Text fontWeight="bold">{person.name}</Text>
          </HStack>
          <HStack spacing={1}>
            <FaBirthdayCake />
            <Text>{person.birthday}</Text>
          </HStack>
        </VStack>
      </HStack>
      {/* 操作按钮 */}
      <HStack mt={4} justify="space-between">
        <Button size="sm" colorScheme="blue">View</Button>
        <Button size="sm" colorScheme="green">Edit</Button>
        <Button size="sm" colorScheme="red">Delete</Button>
      </HStack>
    </Box>
  );
};

export default PersonCard;
