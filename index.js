import { PDFDocument } from 'pdf-lib';
import * as fs from 'fs';

async function fillForm() {
    // const formUrl = 'https://www.cn.emb-japan.go.jp/files/100034897.pdf'
    // const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
    const data = fs.readFileSync('./public/100034897.pdf');

    const pdfDoc = await PDFDocument.load(data);

    const form = pdfDoc.getForm();

    const fields = form.getFields();
    fields.forEach(field => {
        const name = field.getName();
        if (name === 'topmostSubform[0].Page1[0].T50[0]') {
            const nameField = form.getDropdown(name);
            console.log(`${name}, nationality`);
            return;
        }

        if (name === 'topmostSubform[0].Page1[0].#area[1].#area[2].RB3[0]') {
            const nameField = form.getRadioGroup(name);
            console.log(`${name}, passport-type`);
            return;
        }

        if (name === 'topmostSubform[0].Page1[0].#area[5].#area[6].#area[7].RB1[0]') {
            const nameField = form.getRadioGroup(name);
            console.log(`${name}, gender`);
            return;
        }

        if (name === 'topmostSubform[0].Page1[0].#area[8].RB2[0]') {
            const nameField = form.getRadioGroup(name);
            console.log(`${name}, marital-status`);
            return;
        }

        if (name === 'topmostSubform[0].Page1[0].T34[0]') {
            const nameField = form.getDropdown(name);
            console.log(`${name}, former-nationality`);
            return;
        }

        if (name === 'topmostSubform[0].Page2[0].#area[1].RB1[0]') {
            const nameField = form.getRadioGroup(name);
            console.log(`${name}, guarantor-gender`);
            return;
        }

        if (name === 'topmostSubform[0].Page2[0].RB1[1]') {
            const nameField = form.getRadioGroup(name);
            console.log(`${name}, inviter-gender`);
            return;
        }

        if (name === 'topmostSubform[0].Page2[0].#area[7].RB5[0]') {
            const nameField = form.getRadioGroup(name);
            console.log(`${name}, is-sentenced`);
            return;
        }

        if (name === 'topmostSubform[0].Page2[0].#area[8].RB5[1]') {
            const nameField = form.getRadioGroup(name);
            console.log(`${name}, is-deported`);
            return;
        }

        if (name === 'topmostSubform[0].Page2[0].#area[9].RB5[2]') {
            const nameField = form.getRadioGroup(name);
            console.log(`${name}, is-convicted`);
            return;
        }

        if (name === 'topmostSubform[0].Page2[0].#area[10].RB5[3]') {
            const nameField = form.getRadioGroup(name);
            console.log(`${name}, is-prostituted`);
            return;
        }

        if (name === 'topmostSubform[0].Page2[0].#area[11].RB5[4]') {
            const nameField = form.getRadioGroup(name);
            console.log(`${name}, is-trafficked`);
            return;
        }

        if (name === 'topmostSubform[0].Page2[0].#area[12].#area[13].#area[14].RB5[5]') {
            const nameField = form.getRadioGroup(name);
            console.log(`${name}, is-crimed`);
            return;
        }

        const nameField = form.getTextField(name);
        console.log(`${name}, ${nameField.getText()}`);
    })

    // Serialize the PDFDocument to bytes (a Uint8Array)
    // const pdfBytes = await pdfDoc.save()

    // fs.writeFileSync('text.pdf', pdfBytes);
}

fillForm().then()