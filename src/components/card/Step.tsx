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
  RadioGroup,
  Radio,
  Select,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IApplication } from 'types/application';

import provinces from '../../../public/provinces.json';

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

  // TODO: https://github.com/fghpdf/japan-family-visit-visa/blob/f0db92ed52b03ea6cf23cf1c9d6818a59155d1d0/src/app/application/page.tsx
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
                    {...register("birthday")}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>出生地点</FormLabel>
                  <Select placeholder='选择与护照一致的出生地' {...register("birthPlace")}>
                    {
                      provinces.map((province) => (
                        <option key={province.code} value={province.name}>{province.name}</option>
                      ))
                    }
                  </Select>
                </FormControl>
              </HStack>
              <HStack>
                <FormControl isRequired width="100%">
                    <FormLabel>性别</FormLabel>
                    <RadioGroup>
                      <Stack direction='row'>
                        <Radio value='male'>男</Radio>
                        <Radio value='female'>女</Radio>
                      </Stack>
                    </RadioGroup>
                </FormControl>
              </HStack>
              <Stack>
                <FormControl isRequired width="100%">
                    <FormLabel>身份证号</FormLabel>
                    <Input
                      size="md"
                      {...register("chineseID")}
                    />
                </FormControl>
              </Stack>
            </>
          )}
          {step === 2 && (
            <>
              <HStack>
                <FormControl isRequired width="100%">
                    <FormLabel>婚姻状况</FormLabel>
                    <RadioGroup>
                      <Stack direction='row'>
                        <Radio value="Single">未婚</Radio>
                        <Radio value="Married">已婚</Radio>
                        <Radio value="Widowed">离婚</Radio>
                        <Radio value="Divorced">丧偶</Radio>
                      </Stack>
                    </RadioGroup>
                </FormControl>
              </HStack>
              <Stack>
                <FormControl isRequired width="100%">
                    <FormLabel>家庭现住址</FormLabel>
                    <Input {...register("homeAddress")} isRequired placeholder="当前居住的地址，比如湖北省武汉市洪山区XX小区"/>
                </FormControl>
              </Stack>
              <Stack>
                <FormControl isRequired width="100%">
                    <FormLabel>联系方式</FormLabel>
                    <Input type="tel" {...register("tel")} isRequired placeholder="13412345678"/>
                </FormControl>
              </Stack>
              <Stack>
                <FormControl isRequired width="100%">
                    <FormLabel>电子邮箱</FormLabel>
                    <Input type="email" {...register("email")}  isRequired placeholder="XX@outlook.com"/>
                </FormControl>
              </Stack>
              <Stack>
                <FormControl isRequired width="100%">
                    <FormLabel>任职单位名称</FormLabel>
                    <Input {...register("employerName")}  isRequired placeholder="当前公司名，比如武汉初心有限公司"/>
                </FormControl>
              </Stack>
              <Stack>
                <FormControl isRequired width="100%">
                    <FormLabel>任职单位联系方式</FormLabel>
                    <Input type="tel" {...register("employerTel")}  isRequired placeholder="13412345678"/>
                </FormControl>
              </Stack>
              <Stack>
                <FormControl isRequired width="100%">
                    <FormLabel>任职单位地址</FormLabel>
                    <Input {...register("employerAddress")} isRequired placeholder="当前公司的地址，比如湖北省武汉市洪山区光谷软件园"/>
                </FormControl>
              </Stack>
              <Stack>
                <FormControl isRequired width="100%">
                    <FormLabel>任职单位职位</FormLabel>
                    <Input {...register("occupation")} isRequired placeholder="当前职位，比如财务"/>
                </FormControl>
              </Stack>
            </>
          )}
          {step === 3 && (
            <>
              <FormControl isRequired>
                <FormLabel>护照号</FormLabel>
                <Input {...register("passportNumber")} isRequired placeholder="护照号"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>护照签发地点</FormLabel>
                <Input {...register("passportIssuedPlace")} isRequired placeholder="护照签发地点"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>护照签发机关</FormLabel>
                <Input {...register("passportIssuedAuthority")} isRequired placeholder="护照签发机关"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>护照签发日期</FormLabel>
                <Input type="date" {...register("passportIssuedDate")} isRequired placeholder="与护照一致"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>护照有效日期</FormLabel>
                <Input type="date" {...register("passportExpiryDate")} isRequired placeholder="与护照一致"/>
              </FormControl>
            </>
          )}
          {step === 4 && (
            <>
              <FormControl isRequired>
                <FormLabel>担保人名字（英语或者拼音）</FormLabel>
                <Input {...register("guarantorNameEn")} isRequired placeholder="与护照一致"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>担保人名字（中文或者日语或者英语）</FormLabel>
                <Input {...register("guarantorName")} isRequired placeholder="与护照一致"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>担保人联系方式</FormLabel>
                <Input type="tel" {...register("guarantorTel")} isRequired placeholder="+8109012341234"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>担保人地址（英语）</FormLabel>
                <Input {...register("guarantorAddressEn")} isRequired placeholder="当前居住的地址，比如 XXXX, Nippori Tokyo"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>担保人地址</FormLabel>
                <Input {...register("guarantorAddress")} isRequired placeholder="当前居住的地址，比如東京都荒川区日暮里"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>担保人出生年月日</FormLabel>
                <Input type="date" {...register("guarantorBirthday")} isRequired placeholder="与护照一致"/>
              </FormControl>
              <FormControl as="fieldset" isRequired>
                <FormLabel as="legend">担保人性别</FormLabel>
                <RadioGroup>
                  <HStack>
                    <Radio value="Male">男</Radio>
                    <Radio value="Female">女</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>担保人和申请人的关系</FormLabel>
                <Input {...register("guarantorRelationship")} isRequired placeholder="比如，父子，兄妹，朋友"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>担保人的职位</FormLabel>
                <Input {...register("guarantorOccupation")} isRequired placeholder="比如，软件工程师"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>担保人的国籍</FormLabel>
                <Input {...register("guarantorNationality")} isRequired placeholder="比如，中国"/>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>担保人的签证类型</FormLabel>
                <Input {...register("guarantorVisa")} isRequired placeholder="比如，高度专门职 1 号"/>
              </FormControl>
            </>
          )}

          {/* 根据 `step` 的值来渲染不同的表单输入 */}
          {/* ...更多步骤 */}
          <HStack>
            {step > 1 && <Button onClick={prevStep}>Previous</Button>}
            {step < 5 ? (
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
