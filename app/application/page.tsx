'use client'

import {Checkbox, Input} from "@nextui-org/react";
import React from "react";
import {Radio, RadioGroup} from "@nextui-org/radio";

export default function Example() {
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
                    <form className="space-y-6" action="#" method="POST">
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input label="姓" isRequired/>
                            <Input label="名" isRequired/>
                        </div>

                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input label="姓 - 拼音" isRequired placeholder="与护照一致"/>
                            <Input label="名 - 拼音" isRequired placeholder="与护照一致"/>
                        </div>

                        {/*TODO: format to local*/}
                        <Input type="date" label="出生年月日" isRequired placeholder="与护照一致"/>
                        <Input label="出生地点" isRequired placeholder="与护照一致，例： 湖北"/>
                        <RadioGroup isRequired label="性别"
                                    orientation="horizontal">
                            <Radio value="Male">男</Radio>
                            <Radio value="Female">女</Radio>
                        </RadioGroup>

                        <RadioGroup isRequired label="婚姻状况"
                                    orientation="horizontal">
                            <Radio value="Single">未婚</Radio>
                            <Radio value="Married">已婚</Radio>
                            <Radio value="Widowed">离婚</Radio>
                            <Radio value="Divorced">丧偶</Radio>
                        </RadioGroup>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
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
