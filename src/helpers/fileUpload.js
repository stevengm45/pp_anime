export const fileUpload = async (file) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dainl1ric/upload/'
    const formData = new FormData()
    formData.append('upload_preset', 'animes')
    formData.append('file', file)

    const resp = await fetch(cloudUrl, {
        method: 'POST',
        body: formData
    })

    const cloudResp = await resp.json()

    console.log(cloudResp)

    return cloudResp.secure_url
}