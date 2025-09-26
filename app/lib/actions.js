"use server";

export async function submitFormAction(formData) {
    const name = formData.get("name");
    console.log(`Server Action: Form di-submit oleh ${name}`);
}

export async function handleMultiFieldForm(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const product = formData.get("product");

    console.log(`Server Action: 
        Nama: ${name}
        Email: ${email}
        Produk: ${product}`);
}
