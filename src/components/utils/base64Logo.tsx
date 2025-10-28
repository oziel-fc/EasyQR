export async function toBase64Image(url: string): Promise<string> {
    const response = await fetch(url, { mode: "cors" });
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}
