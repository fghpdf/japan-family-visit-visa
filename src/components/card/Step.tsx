import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Progress,
  VStack,
  Text,
  HStack,
  Stack,
  Card,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IApplication } from 'types/application';

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1Data: '',
    step2Data: '',
    // ...可以根据步骤数增加更多的状态
  });

  const { register, handleSubmit, watch, formState: { errors } } = useForm<IApplication>();
  const onSubmit: SubmitHandler<IApplication> = data => console.log(data);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <Card p={4}>
      <Progress hasStripe value={(step / 3) * 100} size="md" colorScheme="green" width="100%" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          {step === 1 && (
            <>
              <FormControl>
                <FormLabel>基本信息</FormLabel>
              </FormControl>
              <HStack>
                <FormControl isRequired>
                  <FormLabel>姓</FormLabel>
                  <Input name='familyNameCN' isRequired autoComplete='family-name-cn' {...register("familyNameCN")}/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>名</FormLabel>
                  <Input name='givenNameCN' isRequired autoComplete='given-name-cn' {...register("givenNameCN")}/>
                </FormControl>
              </HStack>
              <HStack>
                <FormControl isRequired>
                  <FormLabel>姓(拼音、英文)</FormLabel>
                  <Input name='familyName' isRequired autoComplete='family-name' color={'teal'} placeholder='与护照一致' {...register("familyName")}/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>名(拼音、英文)</FormLabel>
                  <Input name='givenName' isRequired autoComplete='given-name' color={'teal'} placeholder='与护照一致' {...register("givenName")}/>
                </FormControl>
              </HStack>
              <HStack>
                <FormControl isRequired>
                  <FormLabel>出生年月日</FormLabel>
                  <Input
                    placeholder="选择与护照一致的出生年月日"
                    size="md"
                    type="date"
                  />
                </FormControl>
              </HStack>
            </>
          )}
          {step === 2 && (
            <FormControl>
              <FormLabel>Step 2 Input</FormLabel>
              <Input
                type="text"
                placeholder="Step 2 Data"
                value={formData.step2Data}
                onChange={(e) =>
                  setFormData({ ...formData, step2Data: e.target.value })
                }
              />
            </FormControl>
          )}
          {/* 根据 `step` 的值来渲染不同的表单输入 */}
          {/* ...更多步骤 */}
          <HStack>
            {step > 1 && <Button onClick={prevStep}>Previous</Button>}
            {step < 3 ? (
              <Button colorScheme="teal" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button colorScheme="teal" type='submit'>
                Submit
              </Button>
            )}
          </HStack>
        </VStack>
      </form>
    </Card>
  );
};

export default StepForm;
