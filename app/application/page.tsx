'use client'

import {
    Divider,
    Input
} from "@nextui-org/react";
import React, {useEffect} from "react";
import {Radio, RadioGroup} from "@nextui-org/radio";
import { useForm, SubmitHandler } from "react-hook-form";
import {FormValues} from "@/app/application/type";
import fillForm from "@/app/application/fill_form";

export default function Example() {
    const APPLICATION_CACHE_KEY = "application_cache";
    const { register, handleSubmit, setValue } = useForm<FormValues>()
    const [isGuarantorInviterSame, setIsGuarantorInviterSame] = React.useState("1");
    const [tabTitle, setTabTitle] = React.useState("正在填写");

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // save to local storage
        localStorage.setItem(APPLICATION_CACHE_KEY, JSON.stringify(data));
        console.log(fillForm(data));
    }

    useEffect(() => {
        const applicationCacheStr = localStorage.getItem(APPLICATION_CACHE_KEY);
        if (applicationCacheStr == null || applicationCacheStr.length == 0) {
            return
        }

        const applicationCache: FormValues = JSON.parse(applicationCacheStr);
        for (const applicationCacheKey in applicationCache) {
            // @ts-ignore
            setValue(applicationCacheKey, applicationCache[applicationCacheKey]);
        }
    }, [tabTitle])

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" lang="zh-CN">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        基本信息收集
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input label="姓" {...register("surname_zh")} isRequired/>
                            <Input label="名" {...register("lastname_zh")} isRequired/>
                        </div>

                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input label="姓 - 拼音"  {...register("surname_en")}  isRequired placeholder="与护照一致"/>
                            <Input label="名 - 拼音" {...register("lastname_en")}  isRequired placeholder="与护照一致"/>
                        </div>

                        <Input type="date" label="出生年月日" {...register("birthday")}  isRequired placeholder="与护照一致"/>
                        <Input label="出生地点" {...register("birth_place")}  isRequired placeholder="与护照一致，例： 湖北"/>
                        <RadioGroup isRequired label="性别"
                                    {...register("gender")}
                                    orientation="horizontal">
                            <Radio value="Male">男</Radio>
                            <Radio value="Female">女</Radio>
                        </RadioGroup>

                        <Input label="身份证号" {...register("chinese_id")} isRequired/>

                        <Divider className="my-4" />

                        <RadioGroup isRequired label="婚姻状况"
                                    {...register("marital_status")}
                                    orientation="horizontal">
                            <Radio value="Single">未婚</Radio>
                            <Radio value="Married">已婚</Radio>
                            <Radio value="Widowed">离婚</Radio>
                            <Radio value="Divorced">丧偶</Radio>
                        </RadioGroup>

                        <Input label="家庭住址" {...register("home_address")} isRequired placeholder="当前居住的地址，比如湖北省武汉市洪山区XX小区"/>
                        <Input type="tel" label="联系方式" {...register("tel")} isRequired placeholder="13412345678"/>
                        <Input type="email" label="电子邮箱" {...register("email")}  isRequired placeholder="XX@outlook.com"/>

                        <Input type="date" label="上次赴日时间"  {...register("last_enter_date")} isRequired placeholder="上次赴日时间"/>
                        <Input type="number" label="上次赴日停留天数" {...register("last_duration")} isRequired placeholder="比如：10"/>

                        <Input label="任职单位名称" {...register("employer_name")}  isRequired placeholder="当前公司名，比如武汉初心有限公司"/>
                        <Input type="tel" label="联系方式" {...register("employer_tel")}  isRequired placeholder="13412345678"/>
                        <Input label="任职单位地址" {...register("employer_address")} isRequired placeholder="当前公司的地址，比如湖北省武汉市洪山区光谷软件园"/>
                        <Input label="目前职位" {...register("occupation")} isRequired placeholder="当前职位，比如财务"/>

                        {/*TODO: nationality */}

                        <Divider className="my-4" />

                        <Input label="护照号" {...register("passport_number")} isRequired/>
                        <Input label="护照签发地点" {...register("passport_issued_place")} isRequired/>
                        <Input label="护照签发机关" {...register("passport_issued_authority")} isRequired/>

                        <Input type="date" label="护照签发日期" {...register("passport_issued_date")} isRequired placeholder="与护照一致"/>
                        <Input type="date" label="护照有效日期" {...register("passport_expiry_date")} isRequired placeholder="与护照一致"/>

                        <Divider className="my-4" />

                        <Input label="担保人名字（英语或者拼音）" {...register("guarantor_name_en")}  isRequired placeholder="与护照一致"/>
                        <Input label="担保人名字（中文或者日语或者英语）" {...register("guarantor_name")}  isRequired placeholder="与护照一致"/>
                        <Input type="tel" label="担保人联系方式" {...register("guarantor_tel")} isRequired placeholder="+8109012341234"/>
                        <Input label="担保人地址（英语）" {...register("guarantor_address_en")} isRequired placeholder="当前居住的地址，比如 XXXX, Nippori Tokyo"/>
                        <Input label="担保人地址" {...register("guarantor_address")} isRequired placeholder="当前居住的地址，比如東京都荒川区日暮里"/>
                        <Input type="date" label="担保人出生年月日" {...register("guarantor_birthday")} isRequired placeholder="与护照一致"/>
                        <RadioGroup isRequired label="担保人性别"
                                    orientation="horizontal">
                            <Radio value="Male">男</Radio>
                            <Radio value="Female">女</Radio>
                        </RadioGroup>
                        <Input label="担保人和申请人的关系" {...register("guarantor_relationship")} isRequired placeholder="比如，父子，兄妹，朋友"/>
                        <Input label="担保人的职位" {...register("guarantor_occupation")} isRequired placeholder="比如，软工工程师"/>
                        <Input label="担保人的国籍" {...register("guarantor_nationality")} isRequired placeholder="比如，中国"/>
                        <Input label="担保人的签证类型" {...register("guarantor_visa")} isRequired placeholder="比如，高度专门职 1 号"/>

                        <Divider className="my-4" />

                        <RadioGroup isRequired label="担保人和邀请人是否为同一人"
                                    value={isGuarantorInviterSame}
                                    onValueChange={setIsGuarantorInviterSame}
                                    orientation="horizontal">
                            <Radio value="1">是</Radio>
                            <Radio value="0">否</Radio>
                        </RadioGroup>

                        <div hidden={isGuarantorInviterSame === "1"} className="space-y-6">
                            <Input label="邀请人名字（英语或者拼音）"  placeholder="与护照一致"/>
                            <Input label="邀请人名字（中文或者日语或者英语）"  placeholder="与护照一致"/>
                            <Input type="tel" label="邀请人联系方式"  placeholder="+8109012341234"/>
                            <Input label="邀请人地址（英语）"  placeholder="当前居住的地址，比如 XXXX, Nippori Tokyo"/>
                            <Input label="邀请人地址"  placeholder="当前居住的地址，比如東京都荒川区日暮里"/>
                            <Input type="date" label="邀请人出生年月日"  placeholder="与护照一致"/>
                            <RadioGroup  label="邀请人性别"
                                        orientation="horizontal">
                                <Radio value="Male">男</Radio>
                                <Radio value="Female">女</Radio>
                            </RadioGroup>
                            <Input label="邀请人和申请人的关系"  placeholder="比如，父子，兄妹，朋友"/>
                            <Input label="邀请人的职位"  placeholder="比如，软工工程师"/>
                            <Input label="邀请人的国籍"  placeholder="比如，中国"/>
                            <Input label="邀请人的签证类型"  placeholder="比如，高度专门职 1 号"/>
                        </div>

                        <Divider className="my-4" />

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                提交
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        TODO
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            TODO
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
