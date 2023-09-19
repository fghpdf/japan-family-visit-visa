import * as React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/de';

import {
    useController,
    useFormContext
} from "react-hook-form";

import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs from "dayjs";

interface IProps {
    label: string;
    name: string;
}

export const DateInput = ({ label, name }: IProps) => {
    const { control } = useFormContext();
    const { field } = useController({ control, name, defaultValue: null });

    return (
            <DatePicker
                label={label}
                maxDate={dayjs(new Date())}
                value={dayjs(field.value)}
                format={"YYYY-MM-DD"}
                onChange={field.onChange}
                slotProps={{
                    textField: {
                        size: "small"
                    }
                }}
            />
    );
};