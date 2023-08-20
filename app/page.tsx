'use client'

import Image from 'next/image'
import React from "react";
import {NextUIProvider} from "@nextui-org/system";
import {Input} from "@nextui-org/react";
export default function Home() {
  return (
      <NextUIProvider>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input type="email" label="Email" />
              <Input type="email" label="Email" placeholder="Enter your email" />
          </div>
      </NextUIProvider>
  )
}