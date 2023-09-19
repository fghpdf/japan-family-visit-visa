import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useForm, SubmitHandler } from "react-hook-form";
import {FormValues} from "@/app/application/type";
import {DatePicker} from "@mui/x-date-pickers";
import {DateInput} from "@/app/app/InputDate";

export default function AddressForm() {
    const { register, handleSubmit, setValue } = useForm<FormValues>();
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label="姓"
                        fullWidth
                        variant="standard"
                        {...register("surname_zh")}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        label="名"
                        fullWidth
                        variant="standard"
                        {...register("lastname_zh")}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        label="姓 - 拼音"
                        fullWidth
                        variant="standard"
                        {...register("surname_en")}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="名 - 拼音"
                        fullWidth
                        variant="standard"
                        {...register("lastname_en")}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DateInput label="出生年月日" {...register("birthday")}  />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}