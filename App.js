import React from "react";
import {
  Text,
  NativeBaseProvider,
  extendTheme,
  Box,
  HStack,
  Avatar,
  Button,
  StatusBar,
  ScrollView,
  Heading,
  Image,
  VStack
} from "native-base";
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';

import Apex from './assets/category_apex.jpg';
import Csgo from './assets/category_csgo.jpg';
import Fallguys from './assets/category_fallguys.jpg';
import Fortnite from './assets/category_fortnite.jpg';
import Lol from './assets/category_lol.jpg';
import Valorant from './assets/category_valorant.jpg';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        bar-Style='ligth-content'
        backgroundColor='transparent'
        translucent />
      <Box flex={1} bg='black' safeArea>
        <HStack justifyContent='space-between' mx={4} pb={4} pt={2}>
          <Box flexDirection='row' alignItems='center'>
            <Avatar source={{uri: 'https://github.com/davihr1.png'}}>DH</Avatar>
            <Text color='white' ml={4}>Olá,{'\n'} Davi Henrique</Text>
          </Box>
          <HStack>
            <Button
              bg='transparent'
              marginRight={4}
              leftIcon={<AntDesign name="inbox" size={24} color="white" />}
              colorScheme="dark"
            ></Button>
            <Button
              bg='transparent'
              marginRigth={4}
              leftIcon={<Feather name="message-square" size={24} color="white" />}
              colorScheme="dark"
            ></Button>
            <Button
              bg='transparent'
              marginRigth={4}
              leftIcon={<AntDesign name="setting" size={24} color="white" />}
              colorScheme="dark"
            ></Button>
          </HStack>
        </HStack>
        <ScrollView>
          <Box>
            <Heading m={8}>
              <Text color='#f5f5f5' fontSize={28}>Seguindo</Text>
            </Heading>
            <ScrollView horizontal mx={4}>
              <HStack overflow='hidden'>
                <Image source={Apex} alt='img' w={68} h={100} mx={2} />
                <Image source={Csgo} alt='img' w={68} h={100} mx={2} />
                <Image source={Fortnite} alt='img' w={68} h={100} mx={2} />
                <Image source={Fallguys} alt='img' w={68} h={100} mx={2} />
                <Image source={{ uri: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg' }} alt='img' w={68} h={100} mx={2} />
                <Image source={Valorant} alt='img' w={68} h={100} mx={2} />
                <Image source={{ uri: 'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg' }} alt='img' w={68} h={100} mx={2} />
              </HStack>
            </ScrollView>
          </Box>

          <Box m={6}>
            <Text fontSize={16} color='#f5f5f5f5'>Ao Vivo</Text>
            <HStack alignItems='center' mt={2}>
              <Box my={4}>
                <Image source={Fortnite}
                  alt='img' w={20} h={20} borderRadius='full' />
              </Box>
              <Text color='#f5f5f5f5' fontSize={16} mx={4}>
                10 por Partida
                {'\n'}
                <Text fontSize={14} opacity={0.4} color='#f1f1f180' >
                  Free Fire
                </Text>
              </Text>
              <VStack alignItems='flex-end' w={28} ml={20}>
                <Entypo name="video-camera" size={20} color="purple" />
                <Text color='purple' opacity={.5}>
                  Live
                </Text>
              </VStack>
            </HStack>
            <HStack alignItems='center' mt={2}>
              <Box my={4}>
                <Image source={{ uri: 'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg' }}
                  alt='img' w={20} h={20} borderRadius='full' />
              </Box>
              <Text color='#f5f5f5f5' fontSize={16} mx={4}>
                10 por Partida
                {'\n'}
                <Text fontSize={14} opacity={0.4} color='#f1f1f180' >
                  Free Fire
                </Text>
              </Text>
              <VStack alignItems='flex-end' w={28} ml={20}>
                <Entypo name="video-camera" size={20} color="purple" />
                <Text color='purple' opacity={.5}>
                  Live
                </Text>
              </VStack>
            </HStack>
            <HStack alignItems='center' mt={2}>
              <Box my={4}>
                <Image source={Fortnite}
                  alt='img' w={20} h={20} borderRadius='full' />
              </Box>
              <Text color='#f5f5f5f5' fontSize={16} mx={4}>
                10 por Partida
                {'\n'}
                <Text fontSize={14} opacity={0.4} color='#f1f1f180' >
                  Free Fire
                </Text>
              </Text>
              <VStack alignItems='flex-end' w={28} ml={20}>
                <Entypo name="video-camera" size={20} color="purple" />
                <Text color='purple' opacity={.5}>
                  Live
                </Text>
              </VStack>
            </HStack>
            <HStack alignItems='center' mt={2}>
              <Box>
                <Image source={Fortnite}
                  alt='img' w={20} h={20} borderRadius='full' />
              </Box>
              <Text color='#f5f5f5f5' fontSize={16} mx={4}>
                10 por Partida
                {'\n'}
                <Text fontSize={14} opacity={0.4} color='#f1f1f180' >
                  Free Fire
                </Text>
              </Text>
              <VStack alignItems='flex-end' w={28} ml={20}>
                <Entypo name="video-camera" size={20} color="purple" />
                <Text color='purple' opacity={.5}>
                  Live
                </Text>
              </VStack>
            </HStack>
            <HStack alignItems='center' mt={2}>
              <Box>
                <Image source={Fortnite}
                  alt='img' w={20} h={20} borderRadius='full' />
              </Box>
              <Text color='#f5f5f5f5' fontSize={16} mx={4}>
                10 por Partida
                {'\n'}
                <Text fontSize={14} opacity={0.4} color='#f1f1f180' >
                  Free Fire
                </Text>
              </Text>
              <VStack alignItems='flex-end' w={28} ml={20}>
                <Entypo name="video-camera" size={20} color="purple" />
                <Text color='purple' opacity={.5}>
                  Live
                </Text>
              </VStack>
            </HStack>
            <HStack alignItems='center' mt={2}>
              <Box my={4}>
                <Image source={Fortnite}
                  alt='img' w={20} h={20} borderRadius='full' />
              </Box>
              <Text color='#f5f5f5f5' fontSize={16} mx={4}>
                10 por Partida
                {'\n'}
                <Text fontSize={14} opacity={0.4} color='#f1f1f180' >
                  Free Fire
                </Text>
              </Text>
              <VStack alignItems='flex-end' w={28} ml={20}>
                <Entypo name="video-camera" size={20} color="purple" />
                <Text color='purple' opacity={.5}>
                  Live
                </Text>
              </VStack>
            </HStack>
            <HStack alignItems='center' mt={2}>
              <Box my={4}>
                <Image source={Fortnite}
                  alt='img' w={20} h={20} borderRadius='full' />
              </Box>
              <Text color='#f5f5f5f5' fontSize={16} mx={4}>
                10 por Partida
                {'\n'}
                <Text fontSize={14} opacity={0.4} color='#f1f1f180' >
                  Free Fire
                </Text>
              </Text>
              <VStack alignItems='flex-end' w={28} ml={20}>
                <Entypo name="video-camera" size={20} color="purple" />
                <Text color='purple' opacity={.5}>
                  Live
                </Text>
              </VStack>
            </HStack>
            <HStack alignItems='center' mt={2}>
              <Box my={4}>
                <Image source={Apex}
                  alt='img' w={20} h={20} borderRadius='full' />
              </Box>
              <Text color='#f5f5f5f5' fontSize={16} mx={4}>
                10 por Partida
                {'\n'}
                <Text fontSize={14} opacity={0.4} color='#f1f1f180' >
                  Free Fire
                </Text>
              </Text>
              <VStack alignItems='flex-end' w={28} ml={20}>
                <Entypo name="video-camera" size={20} color="purple" />
                <Text color='purple' opacity={.5}>
                  Live
                </Text>
              </VStack>
            </HStack>
            <HStack alignItems='center' mt={2}>
              <Box my={4}>
                <Image source={Lol}
                  alt='img' w={20} h={20} borderRadius='full' />
              </Box>
              <Text color='#f5f5f5f5' fontSize={16} mx={4}>
                10 por Partida
                {'\n'}
                <Text fontSize={14} opacity={0.4} color='#f1f1f180' >
                  Free Fire
                </Text>
              </Text>
              <VStack alignItems='flex-end' w={28} ml={20}>
                <Entypo name="video-camera" size={20} color="purple" />
                <Text color='purple' opacity={.5}>
                  Live
                </Text>
              </VStack>
            </HStack>
            <HStack alignItems='center' mt={2}>
              <Box my={4}>
                <Image source={Fallguys}
                  alt='img' w={20} h={20} borderRadius='full' />
              </Box>
              <Text color='#f5f5f5f5' fontSize={16} mx={4}>
                10 por Partida
                {'\n'}
                <Text fontSize={14} opacity={0.4} color='#f1f1f180' >
                  Free Fire
                </Text>
              </Text>
              <VStack alignItems='flex-end' w={28} ml={20}>
                <Entypo name="video-camera" size={20} color="purple" />
                <Text color='purple' opacity={.5}>
                  Live
                </Text>
              </VStack>
            </HStack>
          </Box>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}