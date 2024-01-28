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

type Inputs = {
  familyNameCN: string;
  givenNameCN: string;
}

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    step1Data: '',
    step2Data: '',
    // ...可以根据步骤数增加更多的状态
  });

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <Card p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Progress value={(step / 3) * 100} size="xs" colorScheme="green" />
        <VStack spacing={4}>
          {step === 1 && (
            <>
              <FormControl>
                <FormLabel>Step 1 Input</FormLabel>
                <Input
                  type="text"
                  placeholder="Step 1 Data"
                  value={formData.step1Data}
                  onChange={(e) =>
                    setFormData({ ...formData, step1Data: e.target.value })
                  }
                />
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
