'use client'

import React, {useEffect} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {FormValues} from "./type";
import fillForm from "./fill_form";

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
            
        </>
    )
}
