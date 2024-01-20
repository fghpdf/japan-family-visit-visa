import { PDFDocument } from 'pdf-lib';
import applicationFieldJson from '../../../public/application-field.json';
import {FormValues} from "./type";

async function fillForm(formValues: FormValues) {
    const formUrl = '/application.pdf'
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

    const pdfDoc = await PDFDocument.load(formPdfBytes);

    const form = pdfDoc.getForm();

    const filedMap = convertJSObjToTSMap(applicationFieldJson)

    const fields = form.getFields();

    for (const formValuesKey in formValues) {
        if (!filedMap.has(formValuesKey)) {
            continue
        }
        // console.log(`key: ${formValuesKey}, value: ${filedMap.get(formValuesKey)}`);
        if (["gender", "marital_status", "passport_type", "guarantor_gender"].indexOf(formValuesKey) != -1) {
            continue
        }

        if (filedMap.get(formValuesKey)?.length == 0) {
            continue
        }

        const textField = form.getTextField(filedMap.get(formValuesKey) as string);
        // @ts-ignore
        textField.setText(formValues[formValuesKey] as string);
    }

    const pdfBytes = await pdfDoc.save();

    const url = URL.createObjectURL(new Blob([pdfBytes]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
        'download',
        `FileName.pdf`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    // @ts-ignore
    link.parentNode.removeChild(link);

}

function convertJSObjToTSMap(jsObj: Object) {
    const tsMap: Map<string, string> = new Map();
    const arrayOfMapEntries = new Map<string, string>(Object.entries(jsObj));
    // @ts-ignore
    for (const [key, value] of arrayOfMapEntries.entries()) {
        tsMap.set(key, value);
    }
    return tsMap;
}

export default fillForm;